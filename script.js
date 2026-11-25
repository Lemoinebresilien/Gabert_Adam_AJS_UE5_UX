const div = document.createElement('div');
div.id = 'liste';
div.className = 'row';
document.body.appendChild(div);

function afficherLivre(livre) {
    const carte = document.createElement("div");
    carte.className = "col-md-3 mb-3";
    carte.innerHTML = `
            <div class="card"><div class="card-body">
            <h5 class="card-title">${livre.titre}</h5>
            <p class="card-text">${livre.annee} · ${livre.genre}</p>
            </div></div>`;
    liste.appendChild(carte);
}

fetch("livres.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (response) {
        console.log(response);

        response.forEach(livre => {
            afficherLivre(livre);
        });
        const btn = document.createElement('button');
        btn.id = 'button';
        btn.className = "btn-solid theme-primary";
        btn.textContent = 'Filtrer';
        document.body.appendChild(btn);

        document.getElementById(button)
        btn.addEventListener('click', function () {
            console.log('clic');

            const tri = response.filter(function (livre) {
                return livre.genre == "Roman";
            });

            liste.innerHTML = '';
            tri.forEach(livre => {
                afficherLivre(livre);
            });
        });


    });






