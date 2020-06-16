-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-06-2020 a las 14:23:07
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `vodeibdd`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `capitulos`
--

CREATE TABLE `capitulos` (
  `id` varchar(40) NOT NULL COMMENT 'clave primaria que identifica a un capitulo con un identificador unico',
  `id_temporada` text NOT NULL COMMENT 'atributo que relaciona el capitulo con una temporada',
  `duracion` time NOT NULL COMMENT 'atributo que almacena la duracion del capitulo',
  `idioma` text NOT NULL COMMENT 'atributo que almacena el idioma del capitulo',
  `subtitulos` text NOT NULL COMMENT 'atributo que almacena los subtitulos disponibles',
  `director` text NOT NULL COMMENT 'variable que almacena el director del capitulo',
  `titulo` text NOT NULL,
  `sinopsis` text NOT NULL
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `emision`
--

CREATE TABLE `emision` (
  `id_contenido` varchar(40) NOT NULL COMMENT 'campo que almacena el id del contenido en emision',
  `tipo` tinyint(4) NOT NULL COMMENT 'campo que almacena el tipo de contenido, 0 estreno, 1 serie, 2 contemporanea',
  `id` varchar(40) NOT NULL
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `funcion`
--

CREATE TABLE `funcion` (
  `id` varchar(40) NOT NULL COMMENT 'atributo que guarda un identificador unico para relacionar funcion con las salas y las peliculas',
  `id_contenido` varchar(40) NOT NULL COMMENT 'clave foranea que almacena el id del contenido a proyectar',
  `fecha` date NOT NULL COMMENT 'atributo que almacena la fecha en que sera proyectada la función',
  `hora_inicio` time NOT NULL COMMENT 'atributo que almacena la hora en que inicia la funcion',
  `hora_fin` time NOT NULL COMMENT 'atributo que indica la hora en que finaliza la funcion',
  `id_sala` varchar(40) NOT NULL COMMENT 'atributo que almacena la sala en que sera proyectada la funcion'
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `item_ofertas`
--

CREATE TABLE `item_ofertas` (
  `item` text NOT NULL,
  `id_oferta` varchar(40) NOT NULL
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ofertas`
--

CREATE TABLE `ofertas` (
  `titulo` text NOT NULL,
  `precio` int(11) NOT NULL,
  `tipo` tinyint(4) NOT NULL,
  `id` varchar(40) NOT NULL
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE `peliculas` (
  `Titulo` text NOT NULL COMMENT 'atributo que almacena el nombre de la película en el idioma castellano.',
  `Titulo_Original` text NOT NULL COMMENT 'Atributo que almacena el nombre de la \r\nen su idioma original',
  `Idioma` text NOT NULL COMMENT 'Atributo que almacena el idioma en que se mostrara la película',
  `Genero` text NOT NULL COMMENT 'Atributo que almacena el genero de la película',
  `Subtitulo` text NOT NULL COMMENT 'Atributo que almacena los subtitulos disponibles para la película',
  `Pais` text NOT NULL COMMENT 'Indica el país de originen de la película',
  `Productora` text NOT NULL COMMENT 'Atributo que almacena la empresa que produjo la película',
  `Fecha_estreno` date NOT NULL COMMENT 'Muestra la fecha en que fue estrenada la película originalmente',
  `Actores` text NOT NULL COMMENT 'Muestra los actores principales que trabajaron en la película',
  `Director` text NOT NULL COMMENT 'Muestra el director que estuvo carga de la película',
  `Duracion` time NOT NULL COMMENT 'Muestra el tiempo total que dura la película',
  `id` varchar(40) NOT NULL COMMENT 'guarda las películas por ID',
  `portada` text NOT NULL COMMENT 'campo que almacena la direccion de la portada',
  `tipo` tinyint(1) NOT NULL COMMENT 'campo que almacena el tipo de pelicula, si es estreno o contemporanea',
  `sinopsis` text NOT NULL
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`Titulo`, `Titulo_Original`, `Idioma`, `Genero`, `Subtitulo`, `Pais`, `Productora`, `Fecha_estreno`, `Actores`, `Director`, `Duracion`, `id`, `portada`, `tipo`, `sinopsis`) VALUES
('asda', 'aad', 'es-LA', 'Drama', 'es-LA', 'uk', 'add', '2020-04-15', 'adasdaa', 'adasda', '02:02:00', 'mov-84bad25a-2180-479d-9c15-dc8dfb3f382a', 'jojo rabit.jpg', 0, 'dadasda'),
('adasda', 'adadasd', 'es-ES', 'Accion', 'es-ES', 'usa', 'asdasd', '2020-04-14', 'asdasdasds', 'asdasd', '21:59:00', 'mov-69ef2c37-4db6-48df-8974-1fa2397d4e3f', 'parasity.jpg', 1, 'esds');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `salas`
--

CREATE TABLE `salas` (
  `id` varchar(40) NOT NULL COMMENT 'atributo que almacena el identificador unico de una tabla',
  `numero` int(11) NOT NULL
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `series`
--

CREATE TABLE `series` (
  `Titulo` text NOT NULL COMMENT 'atributo que almacena el nombre de la series en el idioma castellano.',
  `Titulo_Original` text NOT NULL COMMENT 'Atributo que almacena el nombre de la \r\nen su idioma original',
  `Idioma` text NOT NULL COMMENT 'Atributo que almacena el idioma en que se mostrara la series',
  `Genero` text NOT NULL COMMENT 'Atributo que almacena el genero de la series',
  `Subtitulo` text NOT NULL COMMENT 'Atributo que almacena los subtitulos disponibles para la series',
  `Pais` text NOT NULL COMMENT 'Indica el país de originen de la series',
  `Productora` text NOT NULL COMMENT 'Atributo que almacena la empresa que produjo la series',
  `Fecha_estreno` date NOT NULL COMMENT 'Muestra la fecha en que fue estrenada la series originalmente',
  `Actores` text NOT NULL COMMENT 'Muestra los actores principales que trabajaron en la series',
  `id` varchar(40) NOT NULL COMMENT 'guarda las series por ID',
  `portada` text NOT NULL COMMENT 'campo que almacena la portada de la serie',
  `nTemp` int(11) NOT NULL DEFAULT 0,
  `nCap` int(11) NOT NULL DEFAULT 0,
  `sinopsis` text NOT NULL
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `series`
--

INSERT INTO `series` (`Titulo`, `Titulo_Original`, `Idioma`, `Genero`, `Subtitulo`, `Pais`, `Productora`, `Fecha_estreno`, `Actores`, `id`, `portada`, `nTemp`, `nCap`, `sinopsis`) VALUES
('asdasda', 'asdasd', 'es-LA', 'Accion', 'es-LA', 'uk', 'asdasd', '2020-04-14', 'asdasds', 'ser-229ba1da-9707-4032-8dad-2a6075c5f1c7', 'poster.png', 0, 0, 'sfsd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temporadas`
--

CREATE TABLE `temporadas` (
  `id` varchar(40) NOT NULL COMMENT 'atributo que almacena un identificador unico para cada temporada',
  `id_serie` text NOT NULL COMMENT 'atributo que guarda la relacion entre las temporadas y las series',
  `titulo` text NOT NULL,
  `sinopsis` text NOT NULL
) ENGINE=Aria DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `capitulos`
--
ALTER TABLE `capitulos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_temporada` (`id_temporada`(250));

--
-- Indices de la tabla `emision`
--
ALTER TABLE `emision`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `funcion`
--
ALTER TABLE `funcion`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_funcion` (`id`),
  ADD KEY `id_contenido` (`id_contenido`),
  ADD KEY `id_sala` (`id_sala`);

--
-- Indices de la tabla `item_ofertas`
--
ALTER TABLE `item_ofertas`
  ADD KEY `id_oferta` (`id_oferta`);

--
-- Indices de la tabla `ofertas`
--
ALTER TABLE `ofertas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `peliculas`
--
ALTER TABLE `peliculas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `salas`
--
ALTER TABLE `salas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `series`
--
ALTER TABLE `series`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Titulo` (`Titulo`(250));

--
-- Indices de la tabla `temporadas`
--
ALTER TABLE `temporadas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_serie` (`id_serie`(250));
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
