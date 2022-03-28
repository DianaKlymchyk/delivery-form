'use strict';

let isDelivery = 1,
  selectizeCity = {},
  selectizeAddress = {};

// Fields to send
let selectedCity = {id: 0, name: ''},
  selectedAddress = {id: 0, storeOriginId: 0, name: ''},
  regionId = '';

$(document).ready(function() {
  setType(!isDelivery);
  if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(searchString, position) {
      position = position || 0;
      return this.indexOf(searchString, position) === position;
    };
  }
  
  $('.send-btn').on('click', function () {
    $('#delivery-city-name-input').attr('value', selectedCity.name);
    $('.delivery_city-select-wrapper').off('click');
    $('.delivery_store-select-wrapper').off('click');
    $('.delivery_city-select-wrapper .selectize-input input').on('mousedown');
    $('.delivery_store-select-wrapper .selectize-input input').on('mousedown');
  });
});

function setType (isDeliveryOrder) {
  isDelivery = isDeliveryOrder;
 
  let noDeliveryType = $('#noDelivery')[0],
      isDeliveryType = $('#isDelivery')[0];
  let activeTypeBtn = isDelivery ? isDeliveryType : noDeliveryType,
      noActiveTypeBtn = isDelivery ? noDeliveryType : isDeliveryType;

  activeTypeBtn.style.background = '#d57a4a';
  activeTypeBtn.style.color = '#FFFFFF';
  noActiveTypeBtn.style.background = '#E5E5E5';
  noActiveTypeBtn.style.color = '#707070';
  
  setDefaultView();
}

function createSelectElement(name) {
  let container = $('.' + name + '-select-wrapper')[0];
  container.innerHTML = '';
  let selector =  '<select id="' + name + '" '+ 'name="' + name + '">';
  selector = $(selector);
  selector.appendTo(container);
  return $('#' + name);
}

function createSelectOptions(options) {
  let newOptions = [];
  
  if (options instanceof Array){
    for (let i = 0; i < options.length; i++) {
      newOptions[i] = {id: options[i]['city_id'], name: options[i]['city_name']};
    }
  } else {
    for (let key in options) {
      newOptions.push({
        id: options[key][isDelivery ? 'region_id' : 'store_id'],
        storeOriginId: options[key]['store_origin_id'],
        name: options[key][isDelivery ? 'region_name' : 'store_address']
      });
    }
  }
  
  newOptions.sort(function (a, b) {
    a.name.localeCompare(b.name)
  });
  
  return newOptions;
}

function findSelectedOption(array, selectedId) {
  if (array.length > 0 && selectedId) {
    return array.filter(function (el) {
      return el.id === selectedId;
    })[0];
  } else {
    for (let key in array) {
      if (array[key][!isDelivery ? 'store_id' : 'region_id'] === selectedId) {
        return array[key];
      }
    }
  }
}

function createCitiesSelectElement(name, placeholder, options) {
  options = options ? createSelectOptions(options) : [];
  selectizeCity = createSelectElement(name).selectize({
    placeholder: placeholder,
    options: options,
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    score: function (search) {
      return function (item) {
        return item.name.toLowerCase().startsWith(search) ? 1 : 0 || item.name.startsWith(search) ? 1 : 0;
      }
    },
    openOnFocus: false,
    onInitialize: function () {
      let that = this;
      that.setValue("");
      this.$control.on("click", function () {
        that.ignoreFocusOpen = true;
        setTimeout(function () {
          that.ignoreFocusOpen = false;
        }, 50);
      });
    },
    onFocus: function () {
      if (!this.ignoreFocusOpen) {
        this.open();
      }
    }
  });
  
  selectizeCity[0].selectize.on('change', function (value) {
    selectedCity = {};
    if (!value) {
      createAddressesSelectElement(
        'delivery_store',
        !isDelivery ? 'Адреса магазину' : 'Оберіть район'
      );
      selectizeAddress[0].selectize.disable();
    } else {
      let option = findSelectedOption(options, value);
      let el = $('.selectize-input.items.has-options.full.has-items > div.item');
      if (el[0].innerHTML.length > 20) {
        el[0].innerHTML = el[0].innerHTML.substring(0, 20) + '...';
      }
      $('.send-btn')[0].disabled = true;
      if (option) {
        selectedCity = {id: option.id, name: option.name};
        fillAddressesSelectElement();
      }
    }
  });
}

function createAddressesSelectElement(name, placeholder, options) {
  options = options ? createSelectOptions(options) : [];
  selectizeAddress = createSelectElement(name).selectize({
    placeholder: placeholder,
    options: options,
    labelField: 'name',
    valueField: 'id',
    searchField: ['name'],
    score: function(search) {
      return function (item) {
        return item.name.toLowerCase().startsWith(search) ? 1 : 0 || item.name.startsWith(search) ? 1 : 0;
      }
    },
    openOnFocus: false,
    onInitialize: function () {
      let that = this;
      that.setValue("");
      this.$control.on("click", function () {
        that.ignoreFocusOpen = true;
        setTimeout(function () {
          that.ignoreFocusOpen = false;
        }, 50);
      });
    },
    onFocus: function () {
      if (!this.ignoreFocusOpen) {
        this.open();
      }
    }
  });
}

function fillAddressesSelectElement() {
  let selectize = selectizeAddress[0].selectize;
  selectize.enable();
  clearHiddenFields();
  selectize.clear();
  selectize.clearOptions();
  selectize.load(function(callback) {
    callback(createSelectOptions(getAddresses()));
  });
  selectize.close();
  selectize.setValue("0");
  let addresses = getAddresses();
  
  // Якщо одна адреса, то вона автоматично підставляється
  if (Object.keys(addresses).length === 1) {
    let address = Object.values(addresses)[0];
    let createAddress = {
      id: address[!isDelivery ? 'store_id' : 'region_id'],
      name: address[!isDelivery ? 'store_address' : 'region_name']
    };
    selectize.setValue( Number(createAddress.id), createAddress.name);
    selectedAddress = {
      id: address[!isDelivery ? 'store_id' : 'region_id'],
      storeOriginId: address['store_origin_id'],
      name: address[!isDelivery ? 'store_address' : 'region_name']
    };
    if (isDelivery) {
      regionId = address['region_id'];
    }
    else { regionId = ''; }
    setHiddenFields();
    $('.send-btn')[0].disabled = false;
  }
  
  // Подія вибору на селект
  selectize.on('change', function (eventValue) {
    selectedAddress = {};
    if (!eventValue) {
      $('.send-btn')[0].disabled = true;
    } else {
      let option = findSelectedOption(getAddresses(), eventValue);
      if (option) {
        selectedAddress = {
          id: option[!isDelivery ? 'store_id' : 'region_id'],
          storeOriginId: option['store_origin_id'],
          name: option[!isDelivery ? 'store_address' : 'region_name']
        };
        if (isDelivery) {
          regionId = option['region_id'];
        }
        else { regionId = ''; }
        setHiddenFields();
        $('.send-btn')[0].disabled = false;
      }
    }
  });
}

function setDefaultView() {
  selectedCity = {id: 0, name: ''};
  selectedAddress = {id: 0, storeOriginId: 0, name: ''};
  regionId = '';
  clearHiddenFields();

  createCitiesSelectElement('delivery_city', 'Місто',
      getCities(), 'city_id', 'city_name');

  createAddressesSelectElement(
    'delivery_store',
    !isDelivery ? 'Адреса магазину' : 'Оберіть район'
  );
  selectizeAddress[0].selectize.disable();
  $("input[placeholder]").attr("style", "width: 100%;");
  
  $('.delivery_city-select-wrapper .selectize-input input').on('mousedown', function (e) {
    let city = selectizeCity[0].selectize;
    if (city.isOpen) {
      city.close();
    } else {
      city.open();
    }
    this.focus();
  });
  
  $('.delivery_city-select-wrapper .selectize-input').on("touchend", function(e) {
    e.preventDefault();
    let city = selectizeCity[0].selectize;
    if (city.isOpen) {
      city.close();
    } else {
      city.open();
    }
    this.focus();
  });
  
  $('.delivery_store-select-wrapper .selectize-input input').on('mousedown', function (e) {
    let store = selectizeAddress[0].selectize;
    if (store.isOpen) {
      store.close();
    } else {
      store.open();
    }
    this.focus();
  });
  
  $('.delivery_store-select-wrapper .selectize-input').on("touchend", function(e) {
    e.preventDefault();
    let store = selectizeAddress[0].selectize;
    if (store.isOpen) {
      store.close();
    } else {
      store.open();
    }
    this.focus();
  });
  
  let input = document.querySelectorAll('input.jdropdown-header')[1];
  if (selectedCity.name === '' && input) { input.setAttribute('disabled', 'true') };
  $('.send-btn')[0].disabled = true;
}

// Dropdown data

function getCities() {
  return !isDelivery ? getExampleData('pickup') : getExampleData('delivery');
}

function getAddresses() {
  let cities = getCities();
  let city = null, addresses = null;
  for (let i = 0; i < cities.length; i++) {
    if (cities[i]['city_id'] === selectedCity.id) {
      city = cities[i];
      addresses = !isDelivery ? city['stores'] : city['regions'];
    }
  }
  return addresses;
}

// Set and clear hidden fields

function setHiddenFields() {
  let store = $('#delivery_store').find('option[selected]')[0];
  store.value = selectedAddress.storeOriginId;
  $('#delivery-city-name-input').attr('value', selectedCity.name);
  $('#delivery_store_id-input').attr('value', selectedAddress.storeOriginId);
  if (isDelivery) {
    $('#delivery-region-id-input').attr('value', regionId);
    $('#delivery-region-name-input').attr('value', selectedAddress.name);
  } else {
    $('#delivery-store-addr-input').attr('value', selectedAddress.name);
  }
}

function clearHiddenFields() {
  $('#delivery_store').attr('value', '');
  $('#delivery-city-name-input').attr('value', '');
  $('#delivery-region-id-input').attr('value', '');
  $('#delivery-region-name-input').attr('value', '');
  $('#delivery-store-addr-input').attr('value', '');
}