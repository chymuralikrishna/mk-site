function getCountries() {
    return fetch('countries.json').then(res => res.json()).then(d => d.data);
}

export {getCountries};