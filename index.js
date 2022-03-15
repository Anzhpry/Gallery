import("./main.scss")

import { drawGalleryItem } from './item'
import items from './item'

const galleryRootElement = document.getElementById('gallery')

items.map(item => galleryRootElement.appendChild(drawGalleryItem))