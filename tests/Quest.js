
import '../../animate.js/dist/animate.bundle';

const {
    Clip,
    Component,
    KeyboardEventManager,
    MoveClip,
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
    query
} = Animate.Static;

const Quest = {
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

const scene = new SceneClass();
const sceneNode = '';
const rootHandler = function (key, callback) {
    scene.add(key, callback);
};
const toConsole = function (arr = []) {
    if (Array.isArray(arr))
        arr.forEach((key) => {
            console.log(arr[key]);
            console.log("\n");
        });
};

Object.keys(Quest.room).forEach((key) => {
    rootHandler(key, function () {
        this.key = key;
        this.room = Quest.room[key];
        console.log(this.room.description)

        this.room.question;
        this.room.variants;
    });
});
scene.render(Quest.current);

/*const keyboard = KeyboardEventManager();
keyboard.each('keypress', function (event) {
    console.log(event.code)
    if (event.code === 'Num1') {
        if (Quest.room[Quest.current]['variants'][0]) {}
    }
    if (event.code === 'Num2') {
        if (Quest.room[Quest.current]['variants'][1]) {}
    }
    if (event.code === 'Num3') {
        if (Quest.room[Quest.current]['variants'][2]) {}
    }
})*/

/*
const { Scene, SceneClass } = Animate;
const { getDocument, query } = Animate.Static;
const sc = Scene();
const scc = new SceneClass();
scc.add('one', () => {});
scc.add('two', () => {});
// console.dir(sc);(Object.keys()
const document = getDocument();
console.log(document.createElement)
*/


















