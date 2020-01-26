import fs from 'fs'

import { GildedRose } from './gilded-rose'
import { Item } from './items/item'
import { AgedBrie } from './items/agedBrie'
import { Concert } from './items/concert'
import { Sulfuras } from './items/sulfuras'
import { Conjured } from './items/Conjured'

describe('GildedRoseTest', () => {
  it('foo', () => {
    const items = [new Item('foo', 1, 5)]

    const app = new GildedRose(items)
    app.update_quality()

    expect(app.items[0].name).toEqual('foo')
    expect(app.items[0].quality).toEqual(4)
    expect(app.items[0].sell_in).toEqual(0)
  })
})

it('safety net test', () => {
  const items = [
    new Item('+5 Dexterity Vest', 10, 20), //
    new AgedBrie(2, 0), //
    new Item('Elixir of the Mongoose', 5, 7), //
    new Sulfuras(0, 80), //
    new Sulfuras(-1, 80),
    new Concert(15, 20),
    new Concert(10, 49),
    new Concert(5, 49),
    new Concert(1, 20),
    new Conjured('Conjured Mana Cake', 3, 6),
    new Conjured('Conjured Mana Drink', 0, 4),
  ]

  const app = new GildedRose(items)
  const days = 3
  const result = []

  result.push('OMGHAI')
  for (let i = 0; i < days; i = i + 1) {
    result.push(`-------- day ${i} --------`)
    result.push('name, sellIn, quality')
    for (const item of items) {
      result.push(item.toString())
    }
    result.push('')
    app.update_quality()
  }

  const expected = fs.readFileSync(`${__dirname}/fixture.txt`, 'utf-8')
  expect(result.join('\n')).toEqual(expected)
})
