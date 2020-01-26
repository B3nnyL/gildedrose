import { Item } from './item'

export class Concert extends Item {
  constructor(sell_in, quality) {
    super('Backstage passes to a TAFKAL80ETC concert', sell_in, quality)
  }
  update_quality() {
    if (this._isQualityValid()) {
      this.quality = this._calculationOnSellIn(this.quality)
    }
    this._overBoundaryQuality()
  }

  _calculationOnSellIn(quality) {
    if (this.sell_in < 11 && this.sell_in > 6) {
      return quality + 2
    }
    if (this.sell_in < 6 && this.sell_in >= 0) {
      return quality + 3
    }
    if (this.sell_in < 0) {
      return 0
    }
    return quality + 1
  }
}
