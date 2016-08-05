/**
 * Created by Joe on 04/08/16.
 */
export default function(){
    this.transition(
        this.fromRoute('index'),
        this.toRoute('projects'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    var duration = 500;
    this.transition(
        this.childOf('.lett-r-container'),
        this.use('custom-explode', {
            matchBy: 'data-letter',
            unique: 'data-idx',
            use: ['fly-to', {duration, easing:"easeOutCubic"}]
        }, {
            pickOld: 'span',
            unique: 'data-idx',
            use: ['fade', {duration:duration*(4/6)}]
        }, {
            pickNew: 'span',
            unique: 'data-idx',
            use: ['fade', {delay:duration/6, duration:duration*(4/6)}]
        })
    );
    this.transition(
        this.fromRoute('projects.index'),
        this.toRoute('projects.glob'),
        this.use('zoom-fade', {duration, easing:"easeOutCubic"}),
        this.reverse('shrink-fade', {duration, easing:"easeOutCubic"})
    );
};