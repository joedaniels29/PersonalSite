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
    return Promise.all([animate(this.oldElement, {scale: [1.2, 1], opacity: [0.2, 1]}, opts),
        animate(this.newElement, {scale: [1, 0.9],opacity: [1, 0.5]}, opts)]);
}