const products = require('../../src/data/products');
const { getProductById } = require('../../src/catalog');

describe('getProductById', () => {

  test('ID 1 возвращает products[0]', () => {
    const id = 1;
    const result = getProductById(products, id);
    expect(result).toEqual(products[0]);
  });

  test('ID 4 возвращает products[3]', () => {
    const id = 4;
    const result = getProductById(products, id);
    expect(result).toEqual(products[3]);
  });

  test('ID 6 возвращает products[5]', () => {
    const id = 6;
    const result = getProductById(products, id);
    expect(result).toEqual(products[5]);
  });

  test('ID 0 возвращает null', () => {
    const id = 0;
    const result = getProductById(products, id);
    expect(result).toEqual(null);
  });

  test('ID 999 возвращает null', () => {
    const id = 999;
    const result = getProductById(products, id);
    expect(result).toEqual(null);
  });

  test('ID -1 возвращает null', () => {
    const id = -1;
    const result = getProductById(products, id);
    expect(result).toEqual(null);
  });

  test('строковый ID "1" возвращает null', () => {
    const id = '1';
    const result = getProductById(products, id);
    expect(result).toEqual(null);
  });

  test('ID undefined возвращает null', () => {
    const id = undefined;
    const result = getProductById(products, id);
    expect(result).toEqual(null);
  });

  test('ID NaN возвращает null', () => {
    const id = NaN;
    const result = getProductById(products, id);
    expect(result).toEqual(null);
  });
});
