import { Item } from './item'

export class Sulfuras extends Item {
  constructor(sell_in, quality) {
    super('Sulfuras, Hand of Ragnaros', sell_in, quality)
  }
  update_quality() {
    this.quality = this.quality
  }
  update_sellIn() {
    this.sell_in = this.sell_in
  }

  _isQualityValid() {
    return true
  }
}
