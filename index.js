const modal = document.getElementById('modal');
const modalInner = document.getElementById('modal__inner');

const showImageToModal = (imageElement) => {
	modalInner.appendChild(imageElement);
	modal.classList.add('show');
	document.body.style.overflow = 'hidden';
};

const closeModals = () => {
	modalInner.innerHTML = '';
	modal.classList.remove('show');
	document.body.style.overflow = 'auto';
}

modal.addEventListener('click', () => {
	closeModals();
})

const modalImages = document.getElementsByClassName('modal-image');
for (const image of modalImages) {
	image.addEventListener('click', () => {
		showImageToModal(image.cloneNode());
	})
}
