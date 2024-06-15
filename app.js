document.addEventListener('DOMContentLoaded', function () {
    const pizzaForm = document.getElementById('addPizzaForm');
    const pedidoList = document.getElementById('pedidoItems'); // Cambié el nombre de pizzaList a pedidoList

    pizzaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const pizzaName = document.getElementById('pizzaName').value;
        const pizzaType = document.getElementById('pizzaType').value;

        if (pizzaName === '' || pizzaType === '') {
            alert('Por favor ingrese el nombre y el tipo de la pizza.');
            return;
        }

        addPizza(pizzaName, pizzaType);
        pizzaForm.reset(); // Reiniciar el formulario después de agregar la pizza
    });

    function addPizza(name, type) {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `<span><strong>${name}</strong> - ${type}</span>`;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.addEventListener('click', function () {
            pedidoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        pedidoList.appendChild(li); // Agregar el elemento li al pedidoList
    }
});