
// import '../../../animate.js/dist/animate.bundle';

if (Animate && Animate.Static) {
    init ()
}

const {
    Clip,
    Component,
    KeyboardEventManager,
    MoveClip,
    MoveClipClass,
    Scene,
    SceneClass,
    StepsScene,
    Timer,
    RoxyListener,
    Roxy,
    AnimationFrame,
} = Animate;

const {
    getDocument,
    createElement,
    on,
    query,
    inject,
    random,
    search,
    randomString,
    randomNumber,
    randomHumanizeString,
} = Animate.Static;

function init () {}

const QuestsContent = {
    current: 'room_start',
    room: {
        room_start : {
            description: 'You open room, and see',
            question: 'With have action?',
            variants: [
                {goto: 'room_hall', text: 'Yor see other door, go inside!'},
                {goto: 'goto_table', text: 'Got to table'},
                {goto: 'tale_help_room_start', text: 'Call the HELP!!!'},
            ],
        },
        room_hall : {
            description: 'In the hall big size of walls, you see old man',
            question: 'What you do?',
            variants: [
                {goto: 'old_man_help', text: 'Hey old man, you can help me?'},
                {goto: 'old_man_dialog', text: 'Sorry old man, you can tel me about...'},
                {goto: 'tale_help', text: 'Call the HELP!!!'},
            ],
        },
        goto_table : {
            description: 'Table is empty',
            question: 'What you do?',
            variants: [
                {goto: 'room_hall', text: 'Yor see other door, go inside!'},
                {goto: 'tale_help', text: 'Call the HELP!!!'},
            ],
        },
        tale_help_room_start : {
            description: 'Nothing, you listen... silent',
            question: 'What you do now?',
            variants: [
                {goto: 'room_hall', text: 'Yor see other door, go inside!'},
                {goto: 'goto_table', text: 'Got to table'},
            ],
        },
        old_man_help : {
            description: 'What you won? go a way fucking pig!',
            question: '',
            variants: [
                {goto: 'room_hall', text: 'Back to hall door'},
            ],
        },
        old_man_dialog : {
            description: 'Tale me about',
            question: '',
            variants: [
                {goto: 'old_man_dialog_tale_house', text: 'This house'},
                {goto: 'old_man_dialog_tale_house', text: 'You self'},
                {goto: 'old_man_dialog_tale_house', text: 'Where Anna Morris?'},
            ],
        },
        old_man_dialog_tale_house : {
            description: 'old_man_dialog_tale_house',
            question: '',
            variants: [
                {goto: 'old_man_dialog', text: 'Back'},
            ],
        },
    },
};

const bodyHTML = query('#app');

/*const templateMain = `
<div id="main">
    <h3>Postback Parameters</h3>
    <pre>
<span data-on="menu">subid</span> - unique click code (required)
<span data-on="menu">tid</span> - Transaction or action ID
<span data-on="menu">payout</span> - money earned
<span data-on="menu">cost</span> - costs of the click
<span data-on="menu">status</span> - conversion status
<span data-on="menu">currency</span> - specify any currency (usd, eur, rub).
<span data-on="menu">sub_id_1..10</span>
<span data-on="menu">extra_param_1..10</span>
    </pre>
</div>
`;*/

const templateQuBox = `
<div class="qu qu_box">
    <div class="table">
        <div class="qu qu_id qu_edit valign-top" contenteditable="true">id</div>
        <div class="qu qu_description qu_edit valign-top" contenteditable="true">description</div>
    </div>
    <div class="qu qu_variants">
        <div class="qu_variant hide">
            <span class="qu_variant_goto valign-top"></span>
            <span class="qu_variant_text valign-top"></span>
        </div>
    </div>
    <div class="qu qu_actions">
        <div class="qu qu_btn valign-top" data-on="cancel">Cancel</div>
        <div class="qu qu_btn valign-top" data-on="variant">Add variant</div>
        <div class="qu qu_btn valign-top" data-on="save">Save changes</div>
    </div>
</div>
`;

const QuBox = Component({
    id: 'ComponentQuBox',
    template: templateQuBox,
    init() {},
    methods: {
        createCloneComponent(room) {
            const cloneComponent = this.clone();
            inject('.qu_id', room.id, false, cloneComponent.template);
            inject('.qu_description', room.description, false, cloneComponent.template);
            room.variants.forEach((variant, i) => {
                const variantNodes = createElement('div', {class: 'qu_variant table'}, [
                    '<span class="qu_variant_goto qu_edit valign-top">' + variant.goto+'</span>',
                    '<span class="qu_variant_text qu_edit valign-top">' + (i+1) + '# ' + variant.text+'</span>',
                ]);
                inject('.qu_variants', variantNodes, true, cloneComponent.template);
            });
            return cloneComponent
        },
    },
    complete() {},
});

const templateMain = `
<div id="main">
    <h3>TestRequestMessageEventCommands</h3>
</div>
`;

const Main = Component({
    id: 'ComponentMain',
    template: templateMain,
    keys: {},
    init() {
        bodyHTML.appendChild(this.template);
        Object.keys(QuestsContent.room).forEach((key) => {
            QuestsContent.room[key].id = key;
            const coco = QuBox.createCloneComponent(QuestsContent.room[key]);
            bodyHTML.appendChild(coco.template);
        });
    },
    complete() {
        on(document, 'keydown', (event) => {
            if (event.code === 'Digit1') this.keys[event.code] = true;
            if (event.code === 'Digit2') this.keys[event.code] = true;
            if (event.code === 'Digit3') this.keys[event.code] = true;
            if (event.code === 'Digit4') this.keys[event.code] = true;
            if (event.code === 'Space') this.keys[event.code] = true;
            if (event.code === 'Enter') this.keys[event.code] = true;
            if (event.code === 'Escape') this.keys[event.code] = true;
            if (event.code === 'AltRight') this.keys[event.code] = true;
            if (event.code === 'ShiftRight') this.keys[event.code] = true;
        });

        on(document, 'keyup', (event) => {
            if (event.code === 'Digit1') this.keys[event.code] = false;
            if (event.code === 'Digit2') this.keys[event.code] = false;
            if (event.code === 'Digit3') this.keys[event.code] = false;
            if (event.code === 'Digit4') this.keys[event.code] = false;
            if (event.code === 'Space') this.keys[event.code] = false;
            if (event.code === 'Enter') this.keys[event.code] = false;
            if (event.code === 'Escape') this.keys[event.code] = false;
            if (event.code === 'AltRight') this.keys[event.code] = false;
            if (event.code === 'ShiftRight') this.keys[event.code] = false;
        });
    },
});

// const mc = new MoveClipClass({
//     element: '<div></div>'
// });
// console.log(Main);















