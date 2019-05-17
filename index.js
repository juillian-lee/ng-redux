#! /usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');


const FILES = [
    {
        template: 'templates/template-store.module.template',
        file: '##STATE_NAME##-store.module.ts'
    },
    {
        template: 'templates/template-store.service.template',
        file: '##STATE_NAME##-store.service.ts'
    },
    {
        template: 'templates/template.actions.template',
        file: '##STATE_NAME##.actions.ts'
    },
    {
        template: 'templates/template.service.template',
        file: '##STATE_NAME##.service.ts'
    },
    {
        template: 'templates/template.effects.template',
        file: '##STATE_NAME##.effects.ts'
    },
    {
        template: 'templates/template.reducer.template',
        file: '##STATE_NAME##.reducer.ts'
    },
    {
        template: 'templates/template.state.template',
        file: '##STATE_NAME##.state.ts'
    }
];




function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function replaceNames(storeName, string) {
    return string.replace(/##STATE_NAME_CLASS##/g, capitalizeFirstLetter(storeName))
    .replace(/##STATE_NAME##/g, storeName.toLowerCase())
    .replace(/##STATE_NAME_ACTIONS##/g, storeName.toUpperCase());
}

async function createFile(storeName, f) {
    const fileName = f.file.replace('##STATE_NAME##', storeName.toLowerCase());
    console.log(`${chalk.magenta('Criando o arquivo: ' + fileName +  ' com base no Template: ' + f.template)}`);
    const content = replaceNames(storeName, fs.readFileSync(`${__dirname}/${f.template}`, 'utf8'));
    if(!fs.existsSync(`${process.cwd()}/${storeName}/${fileName}`)) {
        await fs.writeFileSync(`${process.cwd()}/${storeName}/${fileName}`, content);
        console.log(`${chalk.magenta('Arquivo : ' + fileName +  ' Gerado com sucesso')}`);
    } else {
        console.log(`${chalk.red('Arquivo : ' + fileName +  ' já existe....')}`);
    }
    
}

async function exec() {
    perguntas = await inquirer.prompt([
        {
            type: 'input',
            name: 'store',
            message: 'Qual o nome da sua store',
            validate: value => value ? true : 'Não é permitido vázio'
        }
    ]);
    console.log(`${chalk.green('Gerando os arquivos com o nome: ' + perguntas.store)}`);
    const storeName = perguntas.store.toLowerCase();
    if(!fs.existsSync(`${process.cwd()}/${storeName}`)) {
        console.log(`${chalk.green('Criando o diretorio da store!')}`);
        fs.mkdirSync(`${process.cwd()}/${storeName}`);
    }

    for(let i in FILES) {
        await createFile(storeName, FILES[i]);
    }
    console.log(`${chalk.green('Processo realizado com sucesso!')}`);
}

exec();
