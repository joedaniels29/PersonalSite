/**
 * Created by Joe on 04/08/16.
 */
import Ember from "ember";
import { Promise } from "liquid-fire";

// Explode is not, by itself, an animation. It exists to pull apart
// other elements so that each of the pieces can be targeted by
// animations.
import { animate } from "liquid-fire";

export default function scale(opts={}) {
    let quantity = .3
    return Promise.all([animate(this.oldElement, {scale: [1-quantity, 1], opacity: [0.1, 1]}, opts),
        animate(this.newElement, {scale: [1, 1+quantity],opacity: [1, 0.1]}, opts)]);
}