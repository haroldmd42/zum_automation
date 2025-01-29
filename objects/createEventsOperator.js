import { loginEventExecutive } from "./login";
import { selectBirthDay, selectlastnameRandom, selectNameRandom, selectRandomNumber } from "./utils/functions";

class CreateEventsOperator {
  async formEventsOperator(page) {
    let keywors = {
        loremIpsum: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",

    };
    let locators = {
        labelOperator:"body > div.modal.fade.ng-isolate-scope.in > div > div > div > div > div.modal-body > form > div > div > div:nth-child(1) > div > select",
        selectDependency: '#main-content > div > form > div:nth-child(1) > div:nth-child(1) > div > div > select',
        selectLocation: '#main-content > div > form > div:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div > div > select',
        selectDepartment: '#main-content > div > form > div:nth-child(1) > div:nth-child(10) > div:nth-child(1) > div > div > span',
        selectMunicipality: '#main-content > div > form > div:nth-child(1) > div:nth-child(10) > div:nth-child(2) > div > div > span > span.selection > span',
        buttoAddService: '#main-content > div > form > div.table-curve-wrapper.form.form-zum > div.row > div > div > table > tbody.add-service-wrapper > tr > td:nth-child(18) > zum-button',
        buttonSaveRP: 'body > div.modal.fade.ng-isolate-scope.in > div > div > div > div > div.modal-footer > button:nth-child(2)'
    };

    let userName = selectNameRandom()

    await loginEventExecutive.formLogin(page);
    await page.locator(".sidebar-option-wrapper").nth(1).click();
    await page.getByText("Crear solicitud").click();
    await page.locator(locators.labelOperator).click();
    await page.locator('select[name="Operador"]').first().selectOption('number:3564');
    await page.waitForTimeout(1000)
    await page.mouse.click(500, 300);
    await page.locator('select[name="Operador"]').nth(1).selectOption('number:76',{force: true});
    await page.getByText('Seleccionar').nth(1).click();
    
    await page.locator(locators.selectDependency).click()
    await await page.locator('select[name="Dependencia"]').selectOption({ label: 'Pruebas QA' });
    await page.mouse.click(500, 300);
    await page.locator('#NumeroDocumentoResponsableNacional').nth(0).fill('00001117');
    await page.locator('#NombreResponsable').fill(userName + ' ' + selectlastnameRandom());
    await page.locator('input[name="TelefonoResponsable"]').fill('3123349655');
    await page.locator('input[name="EmailResponsableEvento"]').fill(userName + '@yopmail.com');
    await page.locator('#select2-BuscarResponsable-container').click();
    await page.waitForSelector('.select2-results__option');
    await page.locator('.select2-results__option').locator('text=Pruebas Borrador').first().click();
    await page.locator('#NombreEvento').fill('Pruebas de eventos automatizadas' + selectRandomNumber() );
    await page.locator('#Description').fill(keywors.loremIpsum);
    await page.locator(locators.selectLocation).click();
    await await page.locator('select[name="TipoLocalizacionId"]').selectOption({ label: 'Consejo Comunitario' });

    await page.locator(locators.selectDepartment).click();
    await page.waitForSelector('.select2-results__option');
    await page.locator('.select2-results__option').locator('text=91 - Amazonas').click();
        
    await page.locator(locators.selectMunicipality).dblclick()
    await page.waitForTimeout(500)
    
    await page.locator(locators.selectMunicipality).click()
    await page.waitForSelector('.select2-results__option');
    await page.locator('.select2-results__option').locator('text=91001 - Leticia').click();

    await page.locator('input[name="FechaInicio"]').fill('2025/12/01');
    await page.locator('input[name="FechaFin"]').fill('2025/12/02');
    await page.locator('input[name="HoraInicio"]').fill('10:00');
    await page.locator('input[name="HoraFin"]').fill('12:00');
    await page.locator('#NombreLocalizacion').fill('Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto');
    await page.locator('#Vereda').fill('Vereda amazonica');
    await page.locator('#Publico').fill(keywors.loremIpsum);
    await page.locator('#Cantidad').fill('5');
    await page.locator('#Descripcion').fill(keywors.loremIpsum);
    await page.locator('#Observacion').fill(keywors.loremIpsum);
    await page.locator('#ClienteNuevo').fill(userName + ' ' + selectlastnameRandom());
    await page.locator('#EventoClienteNo').fill('12456');
    //await page.locator('#main-content > div > form > div:nth-child(1) > div:nth-child(17) > div:nth-child(1) > div:nth-child(1) > div > div > select').click()
    await page.selectOption('select[name="Cliente"]', { label: 'Cliente Vanitas' });
    await page.selectOption('select[name="Servicio"]', {label: 'Video Wall 6 Pantallas (por día)'});
    await page.getByText('Seleccionar RP').click()
    await page.getByText('Agregar').nth(4).click()
    await page.locator('#ValorAsignado').fill('1000000')
    //await page.getByText('Aceptar').nth(1).click()
    await page.locator(locators.buttonSaveRP).click()
    await page.locator(locators.buttoAddService).click()
    await page.locator('.bi.bi-calendar2-week-fill').click()
    await page.locator('#diaCantidad').nth(0).fill('1')
    await page.locator('#diaCantidad').nth(1).fill('1')
    await page.locator('button.btn.btn-default.btn-modal-footer.accept').click()
    await page.locator('button.ng-binding.btn.btn-primary.btn-accept.dropdown-toggle').nth(0).click()
    await page.getByText('Guardar Borrador').click()
    await page.locator('#Description').nth(1).fill(keywors.loremIpsum)
    await page.locator('button.ng-binding.btn.btn-primary.btn-accept.dropdown-toggle').nth(2).click()
    await page.locator('button.btn.btn-default.btn-modal-footer.accept').click()


  }
}

export const createEventsOperator = new CreateEventsOperator();
