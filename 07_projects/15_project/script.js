// RPG Creature Search App
// API docs: https://rpg-creature-api.freecodecamp.rocks/
const API_BASE = 'https://rpg-creature-api.freecodecamp.rocks/api';

// Elements
const inputEl = document.getElementById('search-input');
const btnEl = document.getElementById('search-button');
const nameEl = document.getElementById('creature-name');
const idEl = document.getElementById('creature-id');
const weightEl = document.getElementById('weight');
const heightEl = document.getElementById('height');
const typesEl = document.getElementById('types');
const hpEl = document.getElementById('hp');
const attackEl = document.getElementById('attack');
const defenseEl = document.getElementById('defense');
const spAtkEl = document.getElementById('special-attack');
const spDefEl = document.getElementById('special-defense');
const speedEl = document.getElementById('speed');
const spriteEl = document.getElementById('sprite');

function clearUI() {
    nameEl.textContent = '—';
    idEl.textContent = '';
    weightEl.textContent = 'Weight: —';
    heightEl.textContent = 'Height: —';
    hpEl.textContent = '—';
    attackEl.textContent = '—';
    defenseEl.textContent = '—';
    spAtkEl.textContent = '—';
    spDefEl.textContent = '—';
    speedEl.textContent = '—';
    typesEl.innerHTML = '';
    if (spriteEl) spriteEl.src = '';
}

async function fetchCreature(q) {
    const isNumber = /^\d+$/.test(q);
    const nameOrId = isNumber ? q : q.toLowerCase();
    const res = await fetch(`${API_BASE}/creature/${nameOrId}`);
    if (!res.ok) {
        throw new Error('Creature not found');
    }
    return res.json();
}

function getTypeName(t) {
    if (typeof t === 'string') return t;
    if (t && typeof t === 'object') {
        return t.name || t.type?.name || '';
    }
    return '';
}

function resolveImage(data) {
    return (
        data.image ||
        data.sprite ||
        (data.sprites && (data.sprites.front_default || data.sprites.default)) ||
        ''
    );
}

function updateUI(data) {
    nameEl.textContent = (data.name || '').toString().toUpperCase();
    idEl.textContent = data.id !== undefined ? `#${data.id}` : '';
    if (data.weight !== undefined) weightEl.textContent = `Weight: ${data.weight}`;
    if (data.height !== undefined) heightEl.textContent = `Height: ${data.height}`;

    // Types
    typesEl.innerHTML = '';
    const types = Array.isArray(data.types) ? data.types : [];
    types.forEach((t) => {
        const chip = document.createElement('span');
        chip.className = 'type-chip';
        chip.textContent = getTypeName(t).toUpperCase();
        typesEl.appendChild(chip);
    });

    // Stats
    const stats = data.stats;
    let hp, atk, def, spa, spd, spe;
    if (Array.isArray(stats)) {
        const byName = Object.fromEntries(
            stats.map((s) => [
                (s.stat?.name || s.name || '').toLowerCase(),
                s.base_stat ?? s.value ?? s.base ?? s[0]
            ])
        );
        hp = byName['hp'];
        atk = byName['attack'];
        def = byName['defense'];
        spa = byName['special-attack'] || byName['sp. attack'] || byName['sp_attack'];
        spd = byName['special-defense'] || byName['sp. defense'] || byName['sp_defense'];
        spe = byName['speed'];
    } else if (stats && typeof stats === 'object') {
        hp = stats.hp; atk = stats.attack; def = stats.defense;
        spa = stats['special-attack'] ?? stats.specialAttack ?? stats.spAttack;
        spd = stats['special-defense'] ?? stats.specialDefense ?? stats.spDefense;
        spe = stats.speed;
    }

    if (hp !== undefined) hpEl.textContent = hp;
    if (atk !== undefined) attackEl.textContent = atk;
    if (def !== undefined) defenseEl.textContent = def;
    if (spa !== undefined) spAtkEl.textContent = spa;
    if (spd !== undefined) spDefEl.textContent = spd;
    if (spe !== undefined) speedEl.textContent = spe;

}

async function handleSearch() {
    const q = (inputEl.value || '').trim();
    if (!q) return;
    try {
        const data = await fetchCreature(q);
        updateUI(data);
    } catch (err) {
        alert('Creature not found');
        clearUI();
    }
}

btnEl.addEventListener('click', handleSearch);
inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleSearch();
    }
});
