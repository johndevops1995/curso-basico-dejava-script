const caricatura = {
    nombre: 'vaca y pollito'
}

function recuerdo(personaje){
    console.log(`${this.nombre} era mi caricatura favorita. Me encanta ver las aventuras de ${personaje}`);
}

recuerdo.call(caricatura, 'vaca');//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de vaca
recuerdo.apply(caricatura, ['pollito']);//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de pollito
const recuerdoBind = recuerdo.bind(caricatura, 'pollito');
recuerdoBind();//vaca y pollito era mi caricatura favorita. Me encanta ver las aventuras de pollito
