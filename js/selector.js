// ========================================
// GLOBAL VARIABLES
// ========================================
const photos = ["imagenes/DSC_0001.webp", "imagenes/DSC_0002.webp", "imagenes/DSC_0004.webp", "imagenes/DSC_0005.webp", "imagenes/DSC_0006.webp", "imagenes/DSC_0007.webp", "imagenes/DSC_0008.webp", "imagenes/DSC_0009 (2).webp", "imagenes/DSC_0009.webp", "imagenes/DSC_0010 (2).webp", "imagenes/DSC_0010.webp", "imagenes/DSC_0011 (2).webp", "imagenes/DSC_0011.webp", "imagenes/DSC_0012 (2).webp", "imagenes/DSC_0012.webp", "imagenes/DSC_0013 (2).webp", "imagenes/DSC_0013.webp", "imagenes/DSC_0014 (2).webp", "imagenes/DSC_0014.webp", "imagenes/DSC_0015 (2).webp", "imagenes/DSC_0015.webp", "imagenes/DSC_0016.webp", "imagenes/DSC_0017 (2).webp", "imagenes/DSC_0017.webp", "imagenes/DSC_0018.webp", "imagenes/DSC_0019 (2).webp", "imagenes/DSC_0019.webp", "imagenes/DSC_0020 (2).webp", "imagenes/DSC_0020.webp", "imagenes/DSC_0021 (2).webp", "imagenes/DSC_0021.webp", "imagenes/DSC_0022 (2).webp", "imagenes/DSC_0022.webp", "imagenes/DSC_0023 (2).webp", "imagenes/DSC_0023.webp", "imagenes/DSC_0024 (2).webp", "imagenes/DSC_0024.webp", "imagenes/DSC_0025.webp", "imagenes/DSC_0026.webp", "imagenes/DSC_0027 (2).webp", "imagenes/DSC_0027.webp", "imagenes/DSC_0028.webp", "imagenes/DSC_0029 (2).webp", "imagenes/DSC_0029.webp", "imagenes/DSC_0030 (2).webp", "imagenes/DSC_0030.webp", "imagenes/DSC_0031.webp", "imagenes/DSC_0032 (2).webp", "imagenes/DSC_0032.webp", "imagenes/DSC_0033 (2).webp", "imagenes/DSC_0033.webp", "imagenes/DSC_0034 (2).webp", "imagenes/DSC_0034.webp", "imagenes/DSC_0035 (2).webp", "imagenes/DSC_0035.webp", "imagenes/DSC_0036 (2).webp", "imagenes/DSC_0036.webp", "imagenes/DSC_0037.webp", "imagenes/DSC_0038 (2).webp", "imagenes/DSC_0038.webp", "imagenes/DSC_0039.webp", "imagenes/DSC_0040 (2).webp", "imagenes/DSC_0040.webp", "imagenes/DSC_0041 (2).webp", "imagenes/DSC_0041.webp", "imagenes/DSC_0042 (2).webp", "imagenes/DSC_0042.webp", "imagenes/DSC_0043 (2).webp", "imagenes/DSC_0043.webp", "imagenes/DSC_0044 (2).webp", "imagenes/DSC_0044.webp", "imagenes/DSC_0045 (2).webp", "imagenes/DSC_0045.webp", "imagenes/DSC_0046 (2).webp", "imagenes/DSC_0046.webp", "imagenes/DSC_0047 (2).webp", "imagenes/DSC_0047.webp", "imagenes/DSC_0048 (2).webp", "imagenes/DSC_0048.webp", "imagenes/DSC_0049 (2).webp", "imagenes/DSC_0049.webp", "imagenes/DSC_0050 (2).webp", "imagenes/DSC_0050.webp", "imagenes/DSC_0051 (2).webp", "imagenes/DSC_0051.webp", "imagenes/DSC_0052 (2).webp", "imagenes/DSC_0052.webp", "imagenes/DSC_0053.webp", "imagenes/DSC_0054 (2).webp", "imagenes/DSC_0054.webp", "imagenes/DSC_0055 (2).webp", "imagenes/DSC_0055.webp", "imagenes/DSC_0056 (2).webp", "imagenes/DSC_0056.webp", "imagenes/DSC_0057 (2).webp", "imagenes/DSC_0057.webp", "imagenes/DSC_0058 (2).webp", "imagenes/DSC_0058.webp", "imagenes/DSC_0059 (2).webp", "imagenes/DSC_0059.webp", "imagenes/DSC_0060 (2).webp", "imagenes/DSC_0060.webp", "imagenes/DSC_0061 (2).webp", "imagenes/DSC_0061.webp", "imagenes/DSC_0062 (2).webp", "imagenes/DSC_0062.webp", "imagenes/DSC_0063 (2).webp", "imagenes/DSC_0063.webp", "imagenes/DSC_0064 (2).webp", "imagenes/DSC_0064.webp", "imagenes/DSC_0065 (2).webp", "imagenes/DSC_0065.webp", "imagenes/DSC_0066 (2).webp", "imagenes/DSC_0066.webp", "imagenes/DSC_0067 (2).webp", "imagenes/DSC_0067.webp", "imagenes/DSC_0068 (2).webp", "imagenes/DSC_0068.webp", "imagenes/DSC_0069 (2).webp", "imagenes/DSC_0069.webp", "imagenes/DSC_0070 (2).webp", "imagenes/DSC_0070.webp", "imagenes/DSC_0071 (2).webp", "imagenes/DSC_0071.webp", "imagenes/DSC_0072 (2).webp", "imagenes/DSC_0072.webp", "imagenes/DSC_0073.webp", "imagenes/DSC_0074 (2).webp", "imagenes/DSC_0074.webp", "imagenes/DSC_0075 (2).webp", "imagenes/DSC_0075.webp", "imagenes/DSC_0076 (2).webp", "imagenes/DSC_0076.webp", "imagenes/DSC_0077 (2).webp", "imagenes/DSC_0077.webp", "imagenes/DSC_0078 (2).webp", "imagenes/DSC_0078.webp", "imagenes/DSC_0079 (2).webp", "imagenes/DSC_0079.webp", "imagenes/DSC_0080 (2).webp", "imagenes/DSC_0080.webp", "imagenes/DSC_0081 (2).webp", "imagenes/DSC_0081.webp", "imagenes/DSC_0082 (2).webp", "imagenes/DSC_0082.webp", "imagenes/DSC_0083 (2).webp", "imagenes/DSC_0083.webp", "imagenes/DSC_0084 (2).webp", "imagenes/DSC_0084.webp", "imagenes/DSC_0085 (2).webp", "imagenes/DSC_0085.webp", "imagenes/DSC_0086.webp", "imagenes/DSC_0087.webp", "imagenes/DSC_0088.webp", "imagenes/DSC_0089.webp", "imagenes/DSC_0090.webp", "imagenes/DSC_0091.webp", "imagenes/DSC_0092.webp", "imagenes/DSC_0093.webp", "imagenes/DSC_0094.webp", "imagenes/DSC_0095.webp", "imagenes/DSC_0096.webp", "imagenes/DSC_0097.webp", "imagenes/DSC_0098.webp", "imagenes/DSC_0099.webp", "imagenes/DSC_0100.webp", "imagenes/DSC_0101.webp", "imagenes/DSC_0102.webp", "imagenes/DSC_0103.webp", "imagenes/DSC_0104.webp", "imagenes/DSC_0105.webp", "imagenes/DSC_0106.webp", "imagenes/DSC_0107.webp", "imagenes/DSC_0108.webp", "imagenes/DSC_0109.webp", "imagenes/DSC_0110.webp", "imagenes/DSC_0111.webp", "imagenes/DSC_0112.webp", "imagenes/DSC_0113.webp", "imagenes/DSC_0114.webp", "imagenes/DSC_0115.webp", "imagenes/DSC_0116.webp", "imagenes/DSC_0117.webp", "imagenes/DSC_0118.webp", "imagenes/DSC_0119.webp", "imagenes/DSC_0120.webp", "imagenes/DSC_0121.webp", "imagenes/DSC_0122.webp", "imagenes/DSC_0123.webp", "imagenes/DSC_0124.webp", "imagenes/DSC_0125.webp", "imagenes/DSC_0126.webp", "imagenes/DSC_0127.webp", "imagenes/DSC_0128.webp", "imagenes/DSC_0129.webp", "imagenes/DSC_0130.webp", "imagenes/DSC_0131.webp", "imagenes/DSC_0132.webp", "imagenes/DSC_0133.webp", "imagenes/DSC_0134.webp", "imagenes/DSC_0135.webp", "imagenes/DSC_0136.webp", "imagenes/DSC_0137.webp", "imagenes/DSC_0138.webp", "imagenes/DSC_0139.webp", "imagenes/DSC_0140.webp", "imagenes/DSC_0141.webp", "imagenes/DSC_0142.webp", "imagenes/DSC_0143.webp", "imagenes/DSC_0144.webp", "imagenes/DSC_0145.webp", "imagenes/DSC_0146.webp", "imagenes/DSC_0147.webp", "imagenes/DSC_0148.webp", "imagenes/DSC_0149.webp", "imagenes/DSC_0150.webp", "imagenes/DSC_0151.webp", "imagenes/DSC_0152.webp", "imagenes/DSC_0153.webp", "imagenes/DSC_0154.webp", "imagenes/DSC_0155.webp", "imagenes/DSC_0156.webp", "imagenes/DSC_0157.webp", "imagenes/DSC_0158.webp", "imagenes/DSC_0159.webp", "imagenes/DSC_0160.webp", "imagenes/DSC_0161.webp", "imagenes/DSC_0162.webp", "imagenes/DSC_0163.webp", "imagenes/DSC_0164.webp", "imagenes/DSC_0165.webp", "imagenes/DSC_0166.webp", "imagenes/DSC_0167.webp", "imagenes/DSC_0168.webp", "imagenes/DSC_0169.webp", "imagenes/DSC_0170.webp", "imagenes/DSC_0171.webp", "imagenes/DSC_0172.webp", "imagenes/DSC_0173.webp", "imagenes/DSC_0174.webp", "imagenes/DSC_0175.webp", "imagenes/DSC_0176.webp", "imagenes/DSC_0177.webp", "imagenes/DSC_0178.webp", "imagenes/DSC_0179.webp", "imagenes/DSC_0180.webp", "imagenes/DSC_0181.webp", "imagenes/DSC_0182.webp", "imagenes/DSC_0183.webp", "imagenes/DSC_0184.webp", "imagenes/DSC_0185.webp", "imagenes/DSC_0186.webp", "imagenes/DSC_0187.webp", "imagenes/DSC_0188.webp", "imagenes/DSC_0189.webp", "imagenes/DSC_0190.webp", "imagenes/DSC_0191.webp", "imagenes/DSC_0192.webp", "imagenes/DSC_0193.webp", "imagenes/DSC_0194.webp", "imagenes/DSC_0195.webp", "imagenes/DSC_0196.webp", "imagenes/DSC_0197.webp", "imagenes/DSC_0198.webp", "imagenes/DSC_0199.webp", "imagenes/DSC_0200.webp", "imagenes/DSC_0201.webp", "imagenes/DSC_0202.webp", "imagenes/DSC_0205.webp", "imagenes/DSC_0207.webp", "imagenes/DSC_0208.webp", "imagenes/DSC_0209.webp", "imagenes/DSC_0210.webp", "imagenes/DSC_0214.webp", "imagenes/DSC_0215.webp", "imagenes/DSC_0217.webp", "imagenes/DSC_0218.webp", "imagenes/DSC_0219.webp", "imagenes/DSC_0220.webp", "imagenes/DSC_0221.webp", "imagenes/DSC_0222.webp", "imagenes/DSC_0224.webp", "imagenes/DSC_0225.webp", "imagenes/DSC_0227.webp", "imagenes/DSC_0228.webp", "imagenes/DSC_0229.webp", "imagenes/DSC_0230.webp", "imagenes/DSC_0231.webp", "imagenes/DSC_0232.webp", "imagenes/DSC_0233.webp", "imagenes/DSC_0235.webp", "imagenes/DSC_0237.webp", "imagenes/DSC_0238.webp", "imagenes/DSC_0239.webp", "imagenes/DSC_0240.webp", "imagenes/DSC_0241.webp", "imagenes/DSC_0242.webp", "imagenes/DSC_0243.webp", "imagenes/DSC_0244.webp", "imagenes/DSC_0245.webp", "imagenes/DSC_0246.webp", "imagenes/DSC_0247.webp", "imagenes/DSC_0248.webp", "imagenes/DSC_0249.webp", "imagenes/DSC_0250.webp", "imagenes/DSC_0251.webp", "imagenes/DSC_0252.webp", "imagenes/DSC_0253.webp", "imagenes/DSC_0254.webp", "imagenes/DSC_0255.webp", "imagenes/DSC_0256.webp", "imagenes/DSC_0258.webp", "imagenes/DSC_0261.webp", "imagenes/DSC_0263.webp", "imagenes/DSC_0264.webp", "imagenes/DSC_0265.webp", "imagenes/DSC_0266.webp", "imagenes/DSC_0267.webp", "imagenes/DSC_0268.webp", "imagenes/DSC_0269.webp", "imagenes/DSC_0270.webp", "imagenes/DSC_0271.webp", "imagenes/DSC_0272.webp", "imagenes/DSC_0273.webp", "imagenes/DSC_0274.webp", "imagenes/DSC_0276.webp", "imagenes/DSC_0277.webp", "imagenes/DSC_0278.webp", "imagenes/DSC_0279.webp", "imagenes/DSC_0280.webp", "imagenes/DSC_0281.webp", "imagenes/DSC_0282.webp", "imagenes/DSC_0283.webp", "imagenes/DSC_0284.webp", "imagenes/DSC_0285.webp", "imagenes/DSC_0286.webp", "imagenes/DSC_0287.webp", "imagenes/DSC_0288.webp", "imagenes/DSC_0289.webp", "imagenes/DSC_0290.webp", "imagenes/DSC_0291.webp", "imagenes/DSC_0292.webp", "imagenes/DSC_0293.webp", "imagenes/DSC_0294.webp", "imagenes/DSC_0295.webp", "imagenes/DSC_0297.webp", "imagenes/DSC_0298.webp", "imagenes/DSC_0299.webp", "imagenes/DSC_0300.webp", "imagenes/DSC_0303.webp", "imagenes/DSC_0306.webp", "imagenes/DSC_0307.webp", "imagenes/DSC_0308.webp", "imagenes/DSC_0309.webp", "imagenes/DSC_0310.webp", "imagenes/DSC_0311.webp", "imagenes/DSC_0312.webp", "imagenes/DSC_0313.webp", "imagenes/DSC_0314.webp", "imagenes/DSC_0315.webp", "imagenes/DSC_0316.webp", "imagenes/DSC_0317.webp", "imagenes/DSC_0318.webp", "imagenes/DSC_0319.webp", "imagenes/DSC_0320.webp", "imagenes/DSC_0321.webp", "imagenes/DSC_0322.webp", "imagenes/DSC_0323.webp", "imagenes/DSC_0324.webp", "imagenes/DSC_0325.webp", "imagenes/DSC_0326.webp", "imagenes/DSC_0327.webp", "imagenes/DSC_0328.webp", "imagenes/DSC_0329.webp", "imagenes/DSC_0330.webp", "imagenes/DSC_0331.webp", "imagenes/DSC_0332.webp", "imagenes/DSC_0333.webp", "imagenes/DSC_0334.webp", "imagenes/DSC_0335.webp", "imagenes/DSC_0336.webp", "imagenes/DSC_0337.webp", "imagenes/DSC_0338.webp", "imagenes/DSC_0339.webp", "imagenes/DSC_0340.webp", "imagenes/DSC_0341.webp", "imagenes/DSC_0342.webp", "imagenes/DSC_0343.webp", "imagenes/DSC_0344.webp", "imagenes/DSC_0345.webp", "imagenes/DSC_0346.webp", "imagenes/DSC_0347.webp", "imagenes/DSC_0348.webp", "imagenes/DSC_0349.webp", "imagenes/DSC_0350.webp", "imagenes/DSC_0351.webp", "imagenes/DSC_0352.webp", "imagenes/DSC_0353.webp", "imagenes/DSC_0354.webp", "imagenes/DSC_0355.webp", "imagenes/DSC_0356.webp", "imagenes/DSC_0357.webp", "imagenes/DSC_0358.webp", "imagenes/DSC_0359.webp", "imagenes/DSC_0360.webp", "imagenes/DSC_0362.webp", "imagenes/DSC_0365.webp", "imagenes/DSC_0366.webp", "imagenes/DSC_0367.webp", "imagenes/DSC_0368.webp", "imagenes/DSC_0370.webp", "imagenes/DSC_0371.webp", "imagenes/DSC_0372.webp", "imagenes/DSC_0373.webp", "imagenes/DSC_0374.webp", "imagenes/DSC_0375.webp", "imagenes/DSC_0376.webp", "imagenes/DSC_0377.webp", "imagenes/DSC_0378.webp", "imagenes/DSC_0379.webp", "imagenes/DSC_0380.webp", "imagenes/DSC_0381.webp", "imagenes/DSC_0382.webp", "imagenes/DSC_0383.webp", "imagenes/DSC_0384.webp", "imagenes/DSC_0385.webp", "imagenes/DSC_0386.webp", "imagenes/DSC_0387.webp", "imagenes/DSC_0388.webp", "imagenes/DSC_0389.webp", "imagenes/DSC_0390.webp", "imagenes/DSC_0391.webp", "imagenes/DSC_0392.webp", "imagenes/DSC_0393.webp", "imagenes/DSC_0394.webp", "imagenes/DSC_0395.webp", "imagenes/DSC_0396.webp", "imagenes/DSC_0397.webp", "imagenes/DSC_0398.webp", "imagenes/DSC_0399.webp", "imagenes/DSC_0400.webp", "imagenes/DSC_0402.webp", "imagenes/DSC_0404.webp", "imagenes/DSC_0405.webp", "imagenes/DSC_0406.webp", "imagenes/DSC_0408.webp", "imagenes/DSC_0409.webp", "imagenes/DSC_0414.webp", "imagenes/DSC_0415.webp", "imagenes/DSC_0416.webp"];
// Thumbnail helper: usa thumb/ en grid para ahorrar RAM en moviles
function getThumbPath(fullPath) {
    return fullPath.replace('imagenes/', 'imagenes/thumb/');
}

const STORAGE_KEY = 'boda_berenice_oliver_photo_selections';
const LIMITES = {
    ampliacion: 1,
    impresion: 100,
    invitacion: null
};
let photoSelections = {};
let currentPhotoIndex = null;
let currentFilter = 'all';

// ========================================
// LOCAL STORAGE FUNCTIONS
// ========================================
function loadSelections() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            photoSelections = JSON.parse(saved);
        }
    } catch (error) {
        console.error('Error cargando selecciones:', error);
        photoSelections = {};
    }
}

function saveSelections() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(photoSelections));
    } catch (error) {
        console.error('Error guardando selecciones:', error);
        showToast('Error al guardar. Verifica el espacio del navegador.', 'error');
    }
}

function clearAllSelections() {
    if (confirm('¿Estás seguro de que quieres borrar TODAS las selecciones? Esta acción no se puede deshacer.')) {
        photoSelections = {};
        saveSelections();
        renderGallery();
        updateStats();
        updateFilterButtons();
        showToast('Todas las selecciones han sido eliminadas', 'success');
    }
}

// ========================================
// STATS FUNCTIONS
// ========================================
function getStats() {
    const stats = {
        ampliacion: 0,
        impresion: 0,
        invitacion: 0,
        descartada: 0,
        sinClasificar: photos.length
    };

    Object.values(photoSelections).forEach(selection => {
        if (selection.ampliacion) stats.ampliacion++;
        if (selection.impresion) stats.impresion++;
        if (selection.invitacion) stats.invitacion++;
        if (selection.descartada) stats.descartada++;
    });

    stats.sinClasificar = photos.length - Object.keys(photoSelections).length;

    return stats;
}

function updateStats() {
    const stats = getStats();

    document.getElementById('countAmpliacion').textContent =
        LIMITES.ampliacion ? `${stats.ampliacion}/${LIMITES.ampliacion}` : stats.ampliacion;
    document.getElementById('countImpresion').textContent =
        LIMITES.impresion ? `${stats.impresion}/${LIMITES.impresion}` : stats.impresion;
    document.getElementById('countInvitacion').textContent = stats.invitacion;
    document.getElementById('countDescartada').textContent = stats.descartada;
    document.getElementById('countSinClasificar').textContent = stats.sinClasificar;

    const ampliacionCard = document.querySelector('.stat-card.ampliacion');
    const impresionCard = document.querySelector('.stat-card.impresion');

    if (ampliacionCard) {
        if (stats.ampliacion > LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#f44336';
            ampliacionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.ampliacion === LIMITES.ampliacion) {
            ampliacionCard.style.borderColor = '#4caf50';
            ampliacionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            ampliacionCard.style.borderColor = '';
            ampliacionCard.style.backgroundColor = '';
        }
    }

    if (impresionCard) {
        if (stats.impresion > LIMITES.impresion) {
            impresionCard.style.borderColor = '#f44336';
            impresionCard.style.backgroundColor = 'rgba(244, 67, 54, 0.1)';
        } else if (stats.impresion === LIMITES.impresion) {
            impresionCard.style.borderColor = '#4caf50';
            impresionCard.style.backgroundColor = 'rgba(76, 175, 80, 0.1)';
        } else {
            impresionCard.style.borderColor = '';
            impresionCard.style.backgroundColor = '';
        }
    }
}

// ========================================
// GALLERY FUNCTIONS
// ========================================
function renderGallery() {
    const grid = document.getElementById('photosGrid');
    grid.innerHTML = '';

    if (photos.length === 0) {
        grid.innerHTML = '<div class="no-photos-message">No hay fotos disponibles aún.</div>';
        return;
    }

    photos.forEach((photo, index) => {
        const selection = photoSelections[index] || {};
        const hasAny = selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada;

        const card = document.createElement('div');
        card.className = 'photo-card';
        card.dataset.index = index;

        if (selection.descartada) {
            card.classList.add('has-descartada');
        } else {
            const categories = [];
            if (selection.ampliacion) categories.push('ampliacion');
            if (selection.impresion) categories.push('impresion');
            if (selection.invitacion) categories.push('invitacion');

            if (categories.length > 1) {
                card.classList.add('has-multiple');
            } else if (categories.length === 1) {
                card.classList.add(`has-${categories[0]}`);
            }
        }

        let badgesHTML = '';
        if (hasAny) {
            badgesHTML = '<div class="photo-badges">';
            if (selection.ampliacion) badgesHTML += '<span class="badge badge-ampliacion">🖼️ Ampliación</span>';
            if (selection.impresion) badgesHTML += '<span class="badge badge-impresion">📸 Impresión</span>';
            if (selection.invitacion) badgesHTML += '<span class="badge badge-invitacion">💌 Invitación</span>';
            if (selection.descartada) badgesHTML += '<span class="badge badge-descartada">❌ Descartada</span>';
            badgesHTML += '</div>';
        }

        const displayNumber = `Foto ${index + 1}`;
        const mediaHTML = `
            <div class="photo-image-container">
                <img src="${getThumbPath(photo)}" alt="${displayNumber}" loading="lazy">
            </div>
        `;

        card.innerHTML = `
            ${mediaHTML}
            <div class="photo-number">${displayNumber}</div>
            ${badgesHTML}
        `;

        card.addEventListener('click', () => openModal(index));
        grid.appendChild(card);
    });

    applyFilter();
}

// ========================================
// FILTER FUNCTIONS
// ========================================
function applyFilter() {
    const cards = document.querySelectorAll('.photo-card');

    cards.forEach(card => {
        const index = parseInt(card.dataset.index);
        const selection = photoSelections[index] || {};
        let show = false;

        switch (currentFilter) {
            case 'all':
                show = true;
                break;
            case 'ampliacion':
                show = selection.ampliacion === true;
                break;
            case 'impresion':
                show = selection.impresion === true;
                break;
            case 'invitacion':
                show = selection.invitacion === true;
                break;
            case 'descartada':
                show = selection.descartada === true;
                break;
            case 'sin-clasificar':
                show = !selection.ampliacion && !selection.impresion && !selection.invitacion && !selection.descartada;
                break;
        }

        card.classList.toggle('hidden', !show);
    });
}

function setFilter(filter) {
    currentFilter = filter;
    applyFilter();

    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
    });

    const activeBtn = document.querySelector(`[data-filter="${filter}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }
}

function updateFilterButtons() {
    const stats = getStats();

    document.getElementById('btnFilterAll').textContent = `Todas (${photos.length})`;
    document.getElementById('btnFilterAmpliacion').textContent = `Ampliación (${stats.ampliacion})`;
    document.getElementById('btnFilterImpresion').textContent = `Impresión (${stats.impresion})`;
    document.getElementById('btnFilterInvitacion').textContent = `Invitación (${stats.invitacion})`;
    document.getElementById('btnFilterDescartada').textContent = `Descartadas (${stats.descartada})`;
    document.getElementById('btnFilterSinClasificar').textContent = `Sin Clasificar (${stats.sinClasificar})`;
}

// ========================================
// MODAL FUNCTIONS
// ========================================
function openModal(index) {
    currentPhotoIndex = index;
    const modal = document.getElementById('photoModal');
    const modalImageContainer = document.querySelector('.modal-image-container');
    const modalPhotoNumber = document.getElementById('modalPhotoNumber');

    const photo = photos[index];
    const displayNumber = `Foto ${index + 1}`;

    modalPhotoNumber.textContent = displayNumber;

    modalImageContainer.innerHTML = `
        <img id="modalImage" src="${photo}" alt="${displayNumber}">
        <div class="modal-photo-number" id="modalPhotoNumber">${displayNumber}</div>
    `;

    const selection = photoSelections[index] || {};

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        btn.classList.toggle('selected', selection[category] === true);
    });

    modal.classList.add('active');
    updateNavigationButtons();
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('photoModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    currentPhotoIndex = null;
}

// ========================================
// NAVIGATION FUNCTIONS
// ========================================
function navigatePhoto(direction) {
    if (currentPhotoIndex === null) return;

    let newIndex;
    if (direction === "next") {
        newIndex = currentPhotoIndex + 1;
        if (newIndex >= photos.length) {
            newIndex = 0;
        }
    } else if (direction === "prev") {
        newIndex = currentPhotoIndex - 1;
        if (newIndex < 0) {
            newIndex = photos.length - 1;
        }
    }

    saveCurrentSelections();
    openModal(newIndex);
}

function saveCurrentSelections() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll(".option-btn").forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains("selected");
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    updateStats();
    updateFilterButtons();
}

function updateNavigationButtons() {
    const btnPrev = document.getElementById("btnPrevPhoto");
    const btnNext = document.getElementById("btnNextPhoto");

    if (btnPrev && btnNext) {
        btnPrev.disabled = false;
        btnNext.disabled = false;
    }
}

function saveModalSelection() {
    if (currentPhotoIndex === null) return;

    const selectedCategories = {};
    let hasAnySelection = false;

    document.querySelectorAll('.option-btn').forEach(btn => {
        const category = btn.dataset.category;
        const isSelected = btn.classList.contains('selected');
        selectedCategories[category] = isSelected;
        if (isSelected) hasAnySelection = true;
    });

    if (hasAnySelection) {
        photoSelections[currentPhotoIndex] = selectedCategories;
    } else {
        delete photoSelections[currentPhotoIndex];
    }

    saveSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();
    closeModal();
    showToast('Selección guardada correctamente', 'success');
}

// ========================================
// EXPORT FUNCTIONS
// ========================================
function exportToJSON() {
    const exportData = {
        evento: 'Boda Berenice & Oliver',
        fecha_exportacion: new Date().toISOString(),
        total_fotos: photos.length,
        estadisticas: getStats(),
        selecciones: []
    };

    photos.forEach((photo, index) => {
        const selection = photoSelections[index];
        if (selection && (selection.ampliacion || selection.impresion || selection.invitacion || selection.descartada)) {
            exportData.selecciones.push({
                numero_foto: index + 1,
                archivo: photo,
                ampliacion: selection.ampliacion || false,
                impresion: selection.impresion || false,
                invitacion: selection.invitacion || false,
                descartada: selection.descartada || false
            });
        }
    });

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `seleccion-fotos-boda-berenice-oliver-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);

    showToast('Reporte descargado correctamente', 'success');
}

function generateTextSummary() {
    const stats = getStats();
    let summary = '💒 SELECCIÓN DE FOTOS - BODA BERENICE & OLIVER\n';
    summary += '═══════════════════════════════════════════════════\n\n';
    summary += `📋 SEGÚN CONTRATO:\n`;
    summary += `   🖼️  Ampliación requerida: ${LIMITES.ampliacion} foto (50x60 cm)\n`;
    summary += `   📸 Impresión requerida: ${LIMITES.impresion} fotos (5x7")\n\n`;
    summary += `📊 RESUMEN ACTUAL:\n`;
    summary += `   Total de fotos: ${photos.length}\n`;
    summary += `   🖼️  Para ampliación: ${stats.ampliacion}/${LIMITES.ampliacion} ${stats.ampliacion === LIMITES.ampliacion ? '✓' : stats.ampliacion > LIMITES.ampliacion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   📸 Para impresión: ${stats.impresion}/${LIMITES.impresion} ${stats.impresion === LIMITES.impresion ? '✓' : stats.impresion > LIMITES.impresion ? '⚠️ EXCEDIDO' : '⚠️ FALTA'}\n`;
    summary += `   💌 Para invitación: ${stats.invitacion}\n`;
    summary += `   ❌ Descartadas: ${stats.descartada}\n`;
    summary += `   ⭕ Sin clasificar: ${stats.sinClasificar}\n\n`;

    const categories = ['ampliacion', 'impresion', 'invitacion', 'descartada'];
    const categoryNames = {
        ampliacion: '🖼️  AMPLIACIÓN',
        impresion: '📸 IMPRESIÓN',
        invitacion: '💌 INVITACIÓN',
        descartada: '❌ DESCARTADAS'
    };

    categories.forEach(category => {
        const photosInCategory = [];
        photos.forEach((photo, index) => {
            const selection = photoSelections[index];
            if (selection && selection[category]) {
                photosInCategory.push(index + 1);
            }
        });

        if (photosInCategory.length > 0) {
            summary += `${categoryNames[category]}:\n`;
            summary += `   Fotos: ${photosInCategory.join(', ')}\n`;
            summary += `   Total: ${photosInCategory.length}\n\n`;
        }
    });

    summary += `\n📅 Generado el: ${new Date().toLocaleString('es-MX')}\n`;

    return summary;
}

function copyToClipboard() {
    const summary = generateTextSummary();

    navigator.clipboard.writeText(summary).then(() => {
        showToast('Resumen copiado al portapapeles', 'success');
    }).catch(() => {
        showToast('No se pudo copiar. Selecciona el texto manualmente.', 'error');
    });
}

// ========================================
// TOAST NOTIFICATION
// ========================================
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;

    setTimeout(() => {
        toast.classList.add('show');
    }, 100);

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ========================================
// EVENT LISTENERS
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    loadSelections();
    renderGallery();
    updateStats();
    updateFilterButtons();

    document.getElementById('btnFilterAll').addEventListener('click', () => setFilter('all'));
    document.getElementById('btnFilterAmpliacion').addEventListener('click', () => setFilter('ampliacion'));
    document.getElementById('btnFilterImpresion').addEventListener('click', () => setFilter('impresion'));
    document.getElementById('btnFilterInvitacion').addEventListener('click', () => setFilter('invitacion'));
    document.getElementById('btnFilterDescartada').addEventListener('click', () => setFilter('descartada'));
    document.getElementById('btnFilterSinClasificar').addEventListener('click', () => setFilter('sin-clasificar'));

    document.getElementById('btnFilterAll').dataset.filter = 'all';
    document.getElementById('btnFilterAmpliacion').dataset.filter = 'ampliacion';
    document.getElementById('btnFilterImpresion').dataset.filter = 'impresion';
    document.getElementById('btnFilterInvitacion').dataset.filter = 'invitacion';
    document.getElementById('btnFilterDescartada').dataset.filter = 'descartada';
    document.getElementById('btnFilterSinClasificar').dataset.filter = 'sin-clasificar';

    document.getElementById('btnFilterAll').classList.add('active');

    document.getElementById('btnExport').addEventListener('click', exportToJSON);
    document.getElementById('btnShare').addEventListener('click', copyToClipboard);
    document.getElementById('btnClear').addEventListener('click', clearAllSelections);

    document.querySelector('.modal-close').addEventListener('click', closeModal);
    document.getElementById('btnCancelSelection').addEventListener('click', closeModal);
    document.getElementById('btnSaveSelection').addEventListener('click', saveModalSelection);

    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const isCurrentlySelected = btn.classList.contains('selected');

            if (!isCurrentlySelected) {
                const stats = getStats();

                if (category === 'ampliacion' && stats.ampliacion >= LIMITES.ampliacion) {
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.ampliacion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.ampliacion} foto(s) para ampliación. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }

                if (category === 'impresion' && stats.impresion >= LIMITES.impresion) {
                    const currentSelection = photoSelections[currentPhotoIndex] || {};
                    if (!currentSelection.impresion) {
                        showToast(`⚠️ Ya seleccionaste ${LIMITES.impresion} fotos para impresión. Deselecciona otra primero.`, 'error');
                        return;
                    }
                }
            }

            btn.classList.toggle('selected');
        });
    });

    document.getElementById('photoModal').addEventListener('click', (e) => {
        if (e.target.id === 'photoModal') {
            closeModal();
        }
    });

    document.getElementById('btnPrevPhoto').addEventListener('click', () => {
        navigatePhoto('prev');
    });

    document.getElementById('btnNextPhoto').addEventListener('click', () => {
        navigatePhoto('next');
    });

    document.addEventListener('keydown', (e) => {
        const modal = document.getElementById('photoModal');
        if (modal.classList.contains('active')) {
            if (e.key === 'Escape') {
                closeModal();
            } else if (e.key === 'Enter') {
                saveModalSelection();
            } else if (e.key === 'ArrowLeft') {
                navigatePhoto('prev');
            } else if (e.key === 'ArrowRight') {
                navigatePhoto('next');
            }
        }
    });

});

document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        saveSelections();
    }
});

window.addEventListener('beforeunload', (e) => {
    saveSelections();
});

// ========================================
// DOWNLOAD FUNCTIONS
// ========================================
async function downloadCurrentPhoto() {
    if (currentPhotoIndex === null) return;
    const url = photos[currentPhotoIndex];
    if (!url) return;
    const filename = 'foto-' + (currentPhotoIndex + 1) + '.jpg';
    showToast('Descargando...', 'success');
    try {
        const resp = await fetch(url, { mode: 'cors' });
        const blob = await resp.blob();
        let finalBlob = blob;
        if (!blob.type.includes('jpeg') && !blob.type.includes('jpg')) {
            const bmp = await createImageBitmap(blob);
            const canvas = document.createElement('canvas');
            canvas.width = bmp.width; canvas.height = bmp.height;
            canvas.getContext('2d').drawImage(bmp, 0, 0);
            finalBlob = await new Promise(function(res){ canvas.toBlob(res, 'image/jpeg', 0.95); });
        }
        const a = document.createElement('a');
        const objUrl = URL.createObjectURL(finalBlob);
        a.href = objUrl; a.download = filename;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function(){ URL.revokeObjectURL(objUrl); }, 2000);
        sbRegistrarVisita('descarga');
        showToast('Descargando ' + filename, 'success');
    } catch(e) {
        window.open(url, '_blank');
        showToast('Abriendo foto...', 'success');
    }
}

function downloadAndClose() {
    downloadCurrentPhoto();
    closeModal();
}

// Inyectar botones de descarga en el modal al cargar
(function injectDownloadButtons(){
    function tryInject(){
        var actions = document.querySelector('.modal-actions');
        if (!actions) return;
        if (document.getElementById('btnDownloadClose')) return;
        var btnDlClose = document.createElement('button');
        btnDlClose.id = 'btnDownloadClose';
        btnDlClose.className = 'btn';
        btnDlClose.textContent = '\u2B07 Descargar y Cerrar';
        btnDlClose.style.cssText = 'background:#6c5ce7;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDlClose.addEventListener('click', downloadAndClose);
        var btnDl = document.createElement('button');
        btnDl.id = 'btnDownloadPhoto';
        btnDl.className = 'btn';
        btnDl.textContent = '\u2B07 JPG';
        btnDl.style.cssText = 'background:#0984e3;color:#fff;border:none;padding:8px 14px;border-radius:6px;cursor:pointer;font-size:.85rem;margin-right:4px;';
        btnDl.addEventListener('click', downloadCurrentPhoto);
        actions.insertBefore(btnDlClose, actions.firstChild);
        actions.insertBefore(btnDl, btnDlClose);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', tryInject);
    else tryInject();
})();
