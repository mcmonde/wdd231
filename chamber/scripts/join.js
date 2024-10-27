// Dialog
const membershipDialog = document.querySelector("#membership-dialog");
const modalOverlay = document.createElement('div');
modalOverlay.classList.add('modal-background');
document.body.appendChild(modalOverlay);

document.querySelector("#np-button").addEventListener("click", () => {
    showMembershipDialog("np");
});
document.querySelector("#bronze-button").addEventListener("click", () => {
    showMembershipDialog("bronze");
});
document.querySelector("#silver-button").addEventListener("click", () => {
    showMembershipDialog("silver");
});
document.querySelector("#gold-button").addEventListener("click", () => {
    showMembershipDialog("gold");
});

function showMembershipDialog(level) {
    let title;
    let description;
    switch (level) {
        case "np":
            title = "Non Profit";
            description = "Cost: 0$. Include events only.";
            break;
        case "bronze":
            title = "Bronze";
            description = "Cost: 5$. Include events and training.";
            break;
        case "silver":
            title = "Silver";
            description = "Cost: 10$. Include events, training and advertising.";
            break;
        case "gold":
            title = "Gold";
            description =
                "Cost: 15$. Include events, training, advertising and 20% discount.";
            break;
        default:
            break;
    }
    membershipDialog.innerHTML = `
    <h3>${title}</h3>
    <p>${description}</p>
    <button id="dialog-close" type="reset">Close</button>
  `;
    let closeDialogButton = document.querySelector("#dialog-close");
    closeDialogButton.addEventListener("click", () => {
        membershipDialog.close();
    });
    membershipDialog.showModal();
}