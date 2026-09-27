// main.js — students will add JavaScript here as features are built

// ------------------------------------------------------------------ //
// Video modal                                                         //
// ------------------------------------------------------------------ //

document.querySelectorAll("[data-modal-open]").forEach(function (trigger) {
    var modal = document.getElementById(trigger.dataset.modalOpen);
    if (!modal) return;

    var iframe = modal.querySelector("iframe");

    function openModal() {
        // Load the video only when opened so it starts fresh each time
        iframe.src = iframe.dataset.src;
        modal.hidden = false;
        document.body.style.overflow = "hidden";
        modal.querySelector("[data-modal-close]").focus();
        document.addEventListener("keydown", onKeydown);
    }

    function closeModal() {
        // Clearing the src unloads the player, which stops playback
        iframe.src = "";
        modal.hidden = true;
        document.body.style.overflow = "";
        document.removeEventListener("keydown", onKeydown);
        trigger.focus();
    }

    function onKeydown(event) {
        if (event.key === "Escape") closeModal();
    }

    trigger.addEventListener("click", openModal);

    modal.addEventListener("click", function (event) {
        // Close on the backdrop itself or the close button, not clicks inside the video
        if (event.target === modal || event.target.closest("[data-modal-close]")) {
            closeModal();
        }
    });
});
