const customers = [
  { id: 1, name: "Dev Samurai", site: "http://devsamurai.com.br" },
  { id: 2, name: "Google", site: "http://google.com" },
  { id: 3, name: "UOL", site: "http://uol.com.br" },
];

class CustomersController {
  // Listagem dos Customers
  index(req, res) {
    return res.json(customers);
  }

  show(req, res) {
    const id = parseInt(req.params.id, 10); // Adicione o parâmetro "radix"
    const customer = customers.find((item) => item.id === id);
    const status = customer ? 200 : 404;

    return res.status(status).json(customer);
  }

  create(req, res) {
    const { name, site } = req.body;
    const id = customers[customers.length - 1].id + 1;

    const newCustomer = { id, name, site };

    customers.push(newCustomer);

    return res.status(201).json(newCustomer);
  }

  // ... (outros métodos)

  update(req, res) {
    const id = parseInt(req.params.id, 10); // Adicione o parâmetro "radix"
    const { name, site } = req.body;

    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers[index] = { id: parseInt(id, 10), name, site }; // Adicione o parâmetro "radix"
    }

    return res.status(status).json(customers[index]);
  }

  destroy(req, res) {
    const id = parseInt(req.params.id, 10); // Adicione o parâmetro "radix"
    const index = customers.findIndex((item) => item.id === id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0) {
      customers.splice(index, 1);
    }

    return res.status(status).json();
  }
}

export default new CustomersController();
