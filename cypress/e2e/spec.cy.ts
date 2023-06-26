describe("all flow", () => {
  it("should login successfully", () => {
    cy.visit("/");
    // comprobamos que estamos en la pagina de login porque se redirigio desde /
    cy.url().should("include", "/auth/login");

    // primero probamos a hacer login con credenciales incorrectas
    cy.get("input[name=email]").type("123@123.com");
    cy.get("input[name=password]").type("123");
    cy.get("button[type=submit]").click();

    // comprobamos que no se ha hecho login
    cy.url().should("include", "/auth/login");

    // ahora probamos a hacer login con credenciales correctas
    cy.get("input[name=email]").clear().type("user@mail.com");
    cy.get("input[name=password]").clear().type("12345678");
    cy.get("button[type=submit]").click();

    // comprobamos que se abrio un swal con mensaje de bienvenida
    cy.get(".swal2-title").should("contain", "Bienvenido");
  });
  it("should see all pokemons and pagination checks", () => {
    cy.visit("/");

    // login con credenciales correctas
    cy.get("input[name=email]").clear().type("user@mail.com");
    cy.get("input[name=password]").clear().type("12345678");
    cy.get("button[type=submit]").click();

    // comprobamos que se abrio un swal con mensaje de bienvenida
    cy.get(".swal2-title").should("contain", "Bienvenido");

    // comprobamos que se está logeado porque existe el token
    cy.window().its("localStorage.token").should("exist");

    // comprobamos que se cargaron los pokemons
    cy.get('article').should('have.length', 10);

    // comprobamos que se cambia de pagina
    cy.get('button[aria-label="Next Page"]').click();

    // comprobamos que se cargaron los pokemons
    cy.get('article').should('have.length', 10);

    // comprobamos que se cambia el limite de pokemons por pagina
    cy.get('select').select('20');

    // comprobamos que se cargaron los pokemons
    cy.get('article').should('have.length', 20);
  });
  it("should see pokemon detail", () => {
    cy.visit("/");

    // login con credenciales correctas
    cy.get("input[name=email]").clear().type("user@mail.com");
    cy.get("input[name=password]").clear().type("12345678");
    cy.get("button[type=submit]").click();

    // comprobamos que se abrio un swal con mensaje de bienvenido
    cy.get(".swal2-title").should("contain", "Bienvenido");

    // comprobamos que se está logeado porque existe el token
    cy.window().its("localStorage.token").should("exist");

    // comprobamos que se cargaron los pokemons
    cy.get('article').should('have.length', 10);

    // click en el primero
    cy.get('article').first().click();

    // comprobamos que se abrio el modal
    cy.get('div[aria-labelledby]').should('exist');

    // comprobamos que se abrio el modal con el nombre del pokemon
    cy.get('div[aria-labelledby]').should('contain', 'bulbasaur');

    // cerramos el modal
    cy.get('button').contains('Cerrar').click();

    // comprobamos que se cerro el modal
    cy.get('div[aria-labelledby]').should('not.exist');
    
  })
});
