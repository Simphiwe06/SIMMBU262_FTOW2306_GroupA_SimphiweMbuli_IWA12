const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

const statusElements = document.querySelectorAll('.status');
const reserveButtons = document.querySelectorAll('.reserve');
const checkoutButtons = document.querySelectorAll('.checkout');
const checkinButtons = document.querySelectorAll('.checkin');

for (let i = 0; i < statusElements.length; i++) {
    const statusKey = statusElements[i].textContent.trim();
    const status = STATUS_MAP[statusKey];

    const statusElement = statusElements[i];
    const reserveButton = reserveButtons[i];
    const checkoutButton = checkoutButtons[i];
    const checkinButton = checkinButtons[i];

    statusElement.style.color = status.color;
    reserveButton.disabled = !status.canReserve;
    checkoutButton.disabled = !status.canCheckout;
    checkinButton.disabled = !status.canCheckIn;
}
