let aggresiveActionArr = [];

function aggresiveFireAction(number = 0, name1 = '', name2 = '') {
    aggresiveActionArr = [
        `<span class='member-name'>${name1}</span> обливает бензином <span class='member-name'>${name2}</span> и толкает в огонь`,
        `<span class='member-name'>${name1}</span> замечает горящего <span class='member-name'>${name2}</span> и хватает огнемет, перепутав его с огнетушителем и направляет на <span class='member-name'>${name2}</span>`
    ]
    return aggresiveActionArr[number];
}

aggresiveFireAction();

aggresiveFireAction.caseLength = aggresiveActionArr.length;

export default aggresiveFireAction;