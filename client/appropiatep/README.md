# Git-Flow

- [Introduccion](##intro)
- [Mantener actulizado el repositorio](#pulleando-branches)
- [Combinando tu brach con development](#merge)

## Intro

Tendras a disposicion como desarrollador **3 ramas** que te interesen:
<br>
- Main: La rama del producto final, la del deploy y la que tiene la version definitiva de la aplicacion.
- Development: Esta sera la rama de "Testing", seria la version en la se iran acoplando lo cambios que cada dev haga en el proyecto.
- devnombredeldev: Esta es la rama en la que vas a trabajar particularmente, la que es tu responsabilidad y la que usaremos para no intervenir en el flujo de la app de development.

Es importante entender que no trabajamos en development directamente para poder mantener un flujo de trabajo asincrono,y evitar generar conflictos frecuentemente en las ramas principales (**development** y **main**).

## Pulleando branches

Para evitar los dichos conflictos a la hora de combinar (mergear) las ramas, deberas frecuentemente pararte en la rama development, "pullear" los cambios que existan, y luego mergearlos a tu rama de desarrollo. La secuencia de comandos serian la siguiente (la secuencia es tomando en cuenta que estas parado en tu rama de desarrollo):

```bash
git checkout development
git pull
git checkout devturama
git merge development
```
**NOTA**: En PowerShell podes encadenar los comandos con ";", mientras que en Linux/Ubuntu puedes usar el operador "&&".

## Merge 

Una vez hayas terminado una feature, y quieras agregarla a la branch development, deberas primero guardar tus commit en el el repositorio remoto de tu rama.
<br>
```bash
git add .
git commit -m "Mensaje del commit"
git push
```
NOTA: Es probable que en esta etapa surjan conflictos. No te asustes, es comun, aunque tendremos que resolverlos con cuidado. Mas adelante llegaremos a la resolucion de conflictos.

**IMPORTANTE: Antes de mergear tus cambios a development, asegurate de que tengas la ultima version de development ya "mergeada" en tu rama. Revisar: [Mantener actulizado el repositorio](#pulleando-branches).**

Una vez tus cambios ya esten subidos, muevete a la rama development y mergea tus cambios con los siguientes comandos.
```bash
git merge devturama //El comando "merge" hace un commit por default
git push
```

