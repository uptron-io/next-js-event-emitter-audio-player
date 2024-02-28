# Next.js Event Emitter Audio Player

Приветствую вас! Этот репозиторий представляет собой простой аудиоплеер на основе Next.js, использующий event emitter для управления воспроизведением аудио. Ниже приведены инструкции по клонированию, установке зависимостей и запуску проекта.

## Клонирование репозитория

Чтобы склонировать репозиторий, выполните следующую команду в вашем терминале:

```bash
git clone https://github.com/uptron-io/next-js-event-emitter-audio-player.git
```

## Установка зависимостей

Перейдите в корневую папку проекта и выполните команду установки зависимостей:
```bash
npm install
```

## Запуск проекта

Для запуска проекта используйте команду:

```bash
npm run dev
```

После этого вы сможете открыть ваш браузер и перейти по адресу http://localhost:3000 для просмотра аудиоплеера.

## Изменение на свой аудио файл

Закиньте Ваш аудио файл в папку public.
Откройте файл /src/app/page.tsx и измените значение атрибута src на название вашего аудио файла.

```bash
<AudioPlayer src="/[your_audio_file_name].[extension]" />
```

# Next.js Event Emitter Audio Player

Welcome! This repository is a simple audio player built on Next.js, utilizing an event emitter to manage audio playback. Below are instructions for cloning, installing dependencies, and running the project.

## Cloning the Repository

To clone the repository, execute the following command in your terminal:

```bash
git clone https://github.com/uptron-io/next-js-event-emitter-audio-player.git
```

## Installing Dependencies

Navigate to the project's root folder and run the following command to install dependencies:

```bash
npm install
```

## Running the Project

To run the project, use the following command:

```bash
npm run dev
```

After that, you can open your browser and go to http://localhost:3000 to view the audio player.

## Changing to Your Audio File

Place your audio file in the public folder.
Open the file /src/app/page.tsx and change the value of the src attribute to your audio file's name.


```bash
<AudioPlayer src="/[your_audio_file_name].[extension]" />
```
