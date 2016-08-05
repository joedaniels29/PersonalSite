/**
 * Created by Joe on 04/08/16.
 */
export default function(){
    this.transition(
        this.fromRoute('index'),
        this.toRoute('pojects'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    // this.transition(
    //     this.fromRoute('pojects.index'),
    //     this.toRoute('pojects.new'),
    //     this.use('crossFade'),
    //     this.reverse('crossFade')
    // );
};