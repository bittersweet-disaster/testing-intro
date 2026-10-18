const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = 'all';
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = undefined;
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const filter = '';
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const filter = 'electronics';
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const filter = 'books';
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const filter = 'home';
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const filter = 'clothes';
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const filter = 'toys';
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const filter = 'sports';
    const result = filterByCategory(products, filter);
    expect(result.map(p => p.id)).toEqual([]);
  });

});
