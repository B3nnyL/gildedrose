import { Item } from './item'
import { ITEM_RATE } from './utils'

export class Conjured extends Item {
  update_quality() {
    if (this._isQualityValid()) {
      if (this.sell_in < 0) {
        this.quality = this.quality + ITEM_RATE * 4
      }
      this.quality = this.quality + ITEM_RATE * 2
    }
    this._overBoundaryQuality()
  }
}
