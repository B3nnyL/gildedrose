import { Item } from './item'

export class Conjured extends Item {
  update_quality() {
    if (this._isQualityValid()) {
      if (this.sell_in < 0) {
        this.quality = this.quality - 4
      }
      this.quality = this.quality - 2
    }
    this._overBoundaryQuality()
  }
}
