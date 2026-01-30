---
seo:
  title: Sistemas Operativos ULA
  description: Documentación oficial, laboratorios y proyectos de la cátedra de Sistemas Operativos.
---

::u-page-hero{class="dark:bg-gradient-to-b from-neutral-900 to-neutral-950"}
---
orientation: horizontal
---
#top
:hero-background

#title
Sistemas Operativos ULA

#description
Documentación oficial de la cátedra de Sistemas Operativos (ULA). Aprende cómo funciona realmente el software que mueve al mundo.

#body
  :::u-alert
  ---
  title: La abstracción es un lujo que pagamos con rendimiento. En esta materia, no tenemos presupuesto para lujos.
  icon: i-lucide-terminal
  variant: subtle
  color: neutral
  ---
  :::

#links
  :::u-button
  ---
  to: /getting-started
  size: xl
  trailing-icon: i-lucide-arrow-right
  ---
  Ver centenido
  :::

  :::u-button
  ---
  icon: i-simple-icons-github
  color: neutral
  variant: outline
  size: xl
  to: https://github.com/dimitrio-m/ula-os-clings
  target: _blank
  ---
  Repo de ejercicios
  :::

#default
  :::prose-pre
  ---
  code: |
    #include <sys/syscall.h>

    void main() {
      // Bye printf(). Hello Kernel.
      // syscall(ID, stdout, message, length);
      syscall(SYS_write, 1, "Directo al Metal\n", 17);
    }
  filename: kernel_mode.c
  ---

  ```c [kernel_mode.c]
  #include <sys/syscall.h>

  void main() {
    // Bye printf(). Hello Kernel.
    // syscall(ID, stdout, message, length);
    syscall(SYS_write, 1, "Directo al Metal\n", 17);
  }
  ```
  :::
::

::u-page-section{class="dark:bg-neutral-950"}
#title
Una simulación de ingeniería real

#links
  :::u-button
  ---
  color: neutral
  size: lg
  target: _blank
  to: /getting-started
  trailingIcon: i-lucide-arrow-right
  variant: subtle
  ---
  Ver plan de estudios
  :::

#features
  :::u-page-feature
  ---
  icon: i-simple-icons-c
  ---
  #title
  C Puro (Standard C11)

  #description
  Sin Garbage Collectors ni abstracciones costosas. Gestionarás tu propia memoria y entenderás el costo de cada línea de código.
  :::

  :::u-page-feature
  ---
  icon: i-simple-icons-linux
  ---
  #title
  Linux nativo

  #description
  Windows es para usuarios; Linux es para ingenieros. Trabajaremos sobre WSL2 o Linux nativo para interactuar directo con el Kernel.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-git-pull-request
  ---
  #title
  Git & GitHub Flow

  #description
  Olvida enviar archivos .zip. Aquí se trabaja con Forks, Ramas (Branches) y Pull Requests, como en la industria.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-server
  ---
  #title
  Proyectos, no exámenes

  #description
  Construirás un malloc, una herramienta de gestión Cloud y un Servidor Web concurrente capaz de manejar tráfico real.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-dumbbell
  ---
  #title
  El gimnasio "C-lings"

  #description
  Un repositorio con decenas de ejercicios rotos automatizados. Tu tarea diaria es arreglarlos hasta que pasen los tests.
  :::

  :::u-page-feature
  ---
  icon: i-lucide-shield-alert
  ---
  #title
  Seguridad ofensiva

  #description
  Aprenderás a programar defendiéndote. Buffer Overflows, Race Conditions y fugas de memoria serán tus enemigos diarios.
  :::
::

::u-page-section{class="dark:bg-gradient-to-b from-neutral-950 to-neutral-900"}
  :::u-page-c-t-a
  ---
  links:
    - label: Configurar mi entorno
      to: '/getting-started'
      trailingIcon: i-lucide-arrow-right
    - label: Ver en GitHub
      to: 'https://github.com/dimitrio-m/ula-os-wiki'
      target: _blank
      variant: subtle
      icon: i-simple-icons-github
  title: ¿Listo para escribir código de verdad?
  description: El semestre A-2026 ya comenzó. Prepara tu terminal, clona los repositorios y comienza a aprender.
  class: dark:bg-neutral-950
  ---

  :stars-bg
  :::
::
