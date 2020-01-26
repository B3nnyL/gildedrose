import { Item } from './item'

export class AgedBrie extends Item {
  constructor(sell_in, quality) {
    super('Aged Brie', sell_in, quality)
  }

  update_quality() {
    this.quality = this.quality + 1
  }
}
