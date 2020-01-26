import { GildedRose } from './gilded-rose'
import { Item } from './item'

describe('GildedRoseTest', () => {
  describe('general item', () => {
    it('should follow the rule', () => {
      const items = [new Item('foo', 1, 5)]

      const app = new GildedRose(items)
      app.update_quality()

      expect(app.items[0].name).toEqual('foo')
      expect(app.items[0].quality).toEqual(4)
      expect(app.items[0].sell_in).toEqual(0)
    })
  })
  describe('after expired', () => {
    it('should decrease twice quality point ', () => {
      const items = [new Item('foo', 1, 5)]
      const app = new GildedRose(items)
      app.update_quality()
      app.update_quality()
      expect(app.items[0].name).toEqual('foo')
      expect(app.items[0].quality).toEqual(2)
      expect(app.items[0].sell_in).toEqual(-1)
    })

    describe('Aged Brie', () => {
      it('should increase quality', () => {
        const items = [new Item('Aged Brie', 1, 5)]

        const app = new GildedRose(items)
        app.update_quality()

        expect(app.items[0].name).toEqual('Aged Brie')
        expect(app.items[0].quality).toEqual(6)
        expect(app.items[0].sell_in).toEqual(0)
      })
    })

    describe('Sulfuras, Hand of Ragnaros', () => {
      it('should never increase quality and be expired', () => {
        const items = [new Item('Sulfuras, Hand of Ragnaros', 1, 5)]

        const app = new GildedRose(items)
        app.update_quality()

        expect(app.items[0].name).toEqual('Sulfuras, Hand of Ragnaros')
        expect(app.items[0].quality).toEqual(5)
        expect(app.items[0].sell_in).toEqual(1)
      })
    })

    describe('Backstage passes to a TAFKAL80ETC concert', () => {
      it('should never increase quality twice and before 10 days', () => {
        const items = [
          new Item('Backstage passes to a TAFKAL80ETC concert', 10, 1),
        ]

        const app = new GildedRose(items)
        app.update_quality()

        expect(app.items[0].name).toEqual(
          'Backstage passes to a TAFKAL80ETC concert'
        )
        expect(app.items[0].quality).toEqual(3)
        expect(app.items[0].sell_in).toEqual(9)
      })

      it('should increase quality triple and before 5 days', () => {
        const items = [
          new Item('Backstage passes to a TAFKAL80ETC concert', 5, 1),
        ]

        const app = new GildedRose(items)
        app.update_quality()

        expect(app.items[0].name).toEqual(
          'Backstage passes to a TAFKAL80ETC concert'
        )
        expect(app.items[0].quality).toEqual(4)
        expect(app.items[0].sell_in).toEqual(4)
      })

      it('should become 0 quality after expired', () => {
        const items = [
          new Item('Backstage passes to a TAFKAL80ETC concert', 0, 1),
        ]

        const app = new GildedRose(items)
        app.update_quality()

        expect(app.items[0].name).toEqual(
          'Backstage passes to a TAFKAL80ETC concert'
        )
        expect(app.items[0].quality).toEqual(0)
        expect(app.items[0].sell_in).toEqual(-1)
      })
    })
  })
})
