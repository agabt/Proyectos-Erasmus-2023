-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-06-2023 a las 10:10:04
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_level2_opdr1`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Songs`
--

CREATE TABLE `Songs` (
  `ID` int(15) UNSIGNED NOT NULL,
  `Artist` varchar(50) NOT NULL,
  `Title` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `Songs`
--

INSERT INTO `Songs` (`ID`, `Artist`, `Title`) VALUES
(3, 'Avicii', 'La mare que em va parir nen'),
(4, 'Avicii', 'Hoy hace un viento que flipas'),
(5, 'Los Burlaos de Madrid', 'Viva maria y el que la cultivó');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Songs`
--
ALTER TABLE `Songs`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Songs`
--
ALTER TABLE `Songs`
  MODIFY `ID` int(15) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
