// Docsify Configuration
window.$docsify = {
    name: 'InnerSource for Newbies',
    repo: 'https://github.com/rmarting/innersource-for-newbies',
    auto2top: true,
    executeScript: true,
    loadSidebar: true,
    subMaxLevel: 0,
    sidebarDisplayLevel: 0,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    },
    pagination: {
      crossChapter: true,
      crossChapterText: true,
    },
    darklightTheme: {
      defaultTheme : 'dark',
    },
    coverpage: false,
    copyCode: {
      buttonText : '✂️',
      errorText  : '😔',
      successText: '💚 copied'
    },
  }
