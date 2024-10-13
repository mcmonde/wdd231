import { ge, get, toggle } from "./utils.mjs";
// toggle('toggle-view', ['list-items', 'toggle-view'], 'is-grid', 'listView');

const destinationSelect = ge('destination');
const destinationTypeFilter = ge('destinationType');
const destinationContainer = ge('destinationContainer');

let members= [];

function buildList(members) {
    members = members ? members : [];
    if (destinationSelect) {
        members.forEach(member => {
            const option = document.createElement('option');
            option.value = member.name;
            option.textContent = member.name;
            destinationSelect.appendChild(option);
        });
    }

    if (destinationTypeFilter) {
        const selectedType = destinationTypeFilter.value;
        const filteredDestinations = selectedType === 'all'
            ? members
            : members.filter(destination => destination.type === selectedType);
        if (destinationContainer) {
            destinationContainer.innerHTML = filteredDestinations.map(createDestinationCard).join('');
        }
    }

    // Additional logic for filter highlight and other features
    if (destinationTypeFilter) {
        destinationTypeFilter.addEventListener('change', function() {
            destinationTypeFilter.classList.add('option-highlight');
            setTimeout(() => destinationTypeFilter.classList.remove('option-highlight'), 300);

            if (destinationTypeFilter) {
                const selectedType = destinationTypeFilter.value;
                const filteredDestinations = selectedType === 'all'
                    ? members
                    : members.filter(member => member.type === selectedType);
                if (destinationContainer) {
                    destinationContainer.innerHTML = filteredDestinations.map(createDestinationCard).join('');
                }
            }
        });
    }
}

// Function to create a destination card
function createDestinationCard(member) {
    return `
            <div class="destination-card">
                <img src="${member.imageUrl}" alt="${member.name}">
                <div class="details">
                    <h3>${member.name}</h3>
                    <p>Location: ${member.address}</p>
                    <p>Type: ${member.type}</p>
                    <p>Phone: ${member.phone}</p>
                    <p>website: <a href="${member.website}" target="_blank">${member.website.replace(/^https?:\/\//, '').replace(/\/.*$/, '').replace(/\/+$/, '')}</a></p>
                </div>
            </div>
        `;
}
const iconElement = document.getElementById('icon');

// Toggle between 'view_module' and 'view_list' on click
iconElement.addEventListener('click', () => {
    if (iconElement.innerText === 'view_module') {
        iconElement.innerText = 'view_list';
    } else {
        iconElement.innerText = 'view_module';
    }
});

(async () => {
    try {
        const data = await get('data/members.json');
        buildList(data.members);
    } catch (error) {
        console.error('Error fetching or building the list:', error);
        const listItems = ge('destinationContainer');
        listItems.innerHTML = `<p>Failed to load member data. Please try again later.</p>`;
    }
})();