import { Item } from './item'
import { CONCERT_PHASE_1, CONCERT_PHASE_2, CONCERT_PHASE_3 } from './utils'

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
      return quality + CONCERT_PHASE_2
    }
    if (this.sell_in < 6 && this.sell_in >= 0) {
      return quality + CONCERT_PHASE_3
    }
    if (this.sell_in < 0) {
      return 0
    }
    return quality + CONCERT_PHASE_1
  }
}
