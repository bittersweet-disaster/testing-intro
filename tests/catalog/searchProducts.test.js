const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const search = 'Наушники';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([1]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const search = 'Чистый код';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([6]);
  });


  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const search = 'Настольная лампа';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([4]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const search = 'javascript';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const search = 'ЧЕХОЛ';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([5]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const search = 'наушники';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([1]);
  });

  test("'' возвращает товар с ID 1", () => {
    const search = '';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'     ' возвращает товар с ID 1", () => {
    const search = '     ';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("'\\t\\n' возвращает товар с ID 1", () => {
    const search = '\t\n';
    const result = searchProducts(products, search);
    expect(result.map(p => p.id)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
