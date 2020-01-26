export class Item {
  name
  sell_in
  quality

  constructor(name, sell_in, quality) {
    this.name = name
    this.sell_in = sell_in
    this.quality = quality
  }

  update_quality() {
    if (this._isQualityValid()) {
      if (this.sell_in < 0) {
        this.quality = this.quality - 2
      }
      this.quality = this.quality - 1
    }
    this._overBoundaryQuality()
  }

  update_sellIn() {
    this.sell_in = this.sell_in - 1
  }

  toString() {
    return `${this.name}, ${this.sell_in}, ${this.quality}`
  }

  _isQualityValid() {
    return this.quality > 0 && this.quality < 50
  }

  _overBoundaryQuality() {
    if (this.quality < 0) {
      this.quality = 0
    }
    if (this.quality > 50) {
      this.quality = 50
    }
  }
}
