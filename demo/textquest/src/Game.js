
const Game = function () {
    console.log('Game textquest');
    if (! window.Animate || ! window.Animate.Static ) {
        return new Error('Animate object not exist!');
    }

    const {
        Clip,
        Component,
        KeyboardEventManager,
        MoveClip,
        Scene,
        StepsScene,
        Timer,
        RoxyListener,
        Roxy,
        AnimationFrame,
        Loader,
    } = window.Animate;

    const {
        query,
        search,
        inject,
        typeOf,
        uri,
        copy,
        each,
        on,
        isNode,
    } = window.Animate.Static;

    const AppComponent = Component({
        id: 'AppComponent',
        template: '#app',
        room: {},
        current: '',
        setRoom (key) { this.current = key; },
        getID () { return this.current; },
        getRoom () { return this.room[this.current]; },
        getRoomID (key) { return this.room[key]; },
        append(component) {
            if(isNode(this.template)) {
                this.template.appendChild(component.template);
            }
        },
        clear(){
            this.template.textContent = '';
        },
    });


    const EditorComponentTemplate = `
<div>
    <h3 class="edit-title">Editor:</h3>
    <div class="edit-line">
        <span class="edit-name">ID: </span>
        <span data-node="id" class="edited" contenteditable="true"></span></div>
    <div class="edit-line">
        <span class="edit-name">Description: </span>
        <span data-node="description" class="edited" contenteditable="true"></span></div>
    <div class="edit-line">
        <span class="edit-name">Question: </span>
        <span data-node="question" class="edited" contenteditable="true"></span></div>
    <div class="edit-line edit-title">Variants: </div>
    <div class="variants" data-node="variants">
        <div class="edit-line">
            <span class="edit-name">ID goto: </span> 
            <span data-node="goto" class="edited" contenteditable="true"></span></div>
        <div class="edit-line">
            <span class="edit-name">Variant: </span> 
            <span data-node="text" class="edited" contenteditable="true"></span></div>
    </div>
    <div class="actions" data-node="actions">
        <button class="button">Close</button>
        <button class="button">Reset</button>
        <button class="button">Save</button>
    </div>
</div>`;
    const EditorComponent = Component({
        id: 'EditorComponent',
        template: EditorComponentTemplate,
        room: {},
        form () {

        },
        render () {
            this.room = AppComponent.getRoom();
            this.id = AppComponent.getID();
            console.log(this.id,  this.room);
            AppComponent.clear();
            AppComponent.append(this);
        },
    });

    const OutputComponent = Component({
        id: 'OutputComponent',
        template: '<div>OutputComponent</div>',
        init(){},
        render(){
            AppComponent.clear();
            AppComponent.append(this);
        },
    });

    const scene = Scene();
    scene.add('menu', function () {
        EditorComponent.render();
    })
    scene.add('editor', function () {
        EditorComponent.render();
    })
    scene.add('output', function (a, b, c, d) {
        OutputComponent.render();
    })

    const Load = Loader();
    Load.json('/demo/textquest/data/datafile.json', (json) => {
        AppComponent.room = json.room;
        AppComponent.current = json.current;
        scene.run('editor');
    });
};

export default Game;
