-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 01, 2023 at 11:45 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library`
--

-- --------------------------------------------------------

--
-- Table structure for table `author`
--

CREATE TABLE `author` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `last_name` varchar(30) DEFAULT ' '
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `author`
--

INSERT INTO `author` (`id`, `name`, `last_name`) VALUES
(1, 'F. Scott', 'Fitzgerald'),
(2, 'H.G.', 'Wells'),
(3, 'Edgar Allan', 'Poe'),
(4, 'Emily', 'Brontë'),
(5, 'Herman', 'Melville'),
(6, 'Alexandre', 'Dumas'),
(7, 'Bram', 'Stoker'),
(8, 'Oscar', 'Wilde'),
(11, 'mister', 'koko');

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `image_id` int(11) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `available` tinyint(1) NOT NULL,
  `discount_id` int(11) DEFAULT NULL,
  `author_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `image_id`, `description`, `available`, `discount_id`, `author_id`) VALUES
(1, 'The Great Gatsby', 1, 'The Great Gatsby, F. Scott Fitzgerald\'s third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession\", it is an exquisitely crafted tale of America in the 1920s.\n The Great Gatsby is one of the great classics of twentieth-century literature.', 1, 5, 1),
(2, 'The War of the Worlds', 2, 'When an army of invading Martians lands in England, panic and terror seize the population. As the aliens traverse the country in huge three-legged machines, incinerating all in their path with a heat ray and spreading noxious toxic gases, the people of the Earth must come to terms with the prospect of the end of human civilization and the beginning of Martian rule.\n Inspiring films, radio dramas, comic-book adaptations, television series and sequels,The War of the Worlds is a prototypical work of science fiction which has influenced every alien story that has come since, and is unsurpassed in its ability to thrill, well over a century since it was first published.', 1, 5, 2),
(3, 'Dracula', 3, 'Bram Stoker\'s novel became one of the masterpieces of the horror genre, brilliantly evoking a world of vampires and vampire hunters whilst simultaneously exposing the dark corners of Victorian sexuality and frustrated desire.', 0, 2, 7),
(4, 'The black cat', 4, 'One of Edgar Allan Poe\'s most memorable stories.\nThe tale centers on two matters, a black cat and the deterioration of a man. The man is one who enjoyed family life with his wife and numerous pets, but then he changed radically for the worse. The story is often compared to \"The Tell-Tale Heart\" because of the profound psychological elements these two works share. \"The Black Cat\" is a story you will never forget.\nLibrarian\'s note: this entry relates to the story \"The Black Cat.\" Collections and other short stories by the author can be found elsewhere on Goodreads.', 0, 5, 3),
(5, 'Wuthering Heights', 4, 'This best-selling Norton Critical Edition is based on the 1847 first edition of the novel. For the Fourth Edition, the editor has collated the 1847 text with several modern editions and has corrected a number of variants, including accidentals. The text is accompanied by entirely new explanatory annotations.\nNew to the fourth Edition are twelve of Emily Bronte\'s letters regarding the publication of the 1847 edition of Wuthering Heights as well as the evolution of the 1850 edition, prose and poetry selections by the author, four reviews of the novel, and poetry selections by the author, four reviews of the novel, and Edward Chitham\'s insightful and informative chronology of the creative process behind the beloved work.', 1, 2, 4),
(6, 'Moby-Dick or, the Whale', 5, '\"It is the horrible texture of a fabric that should be woven of ships\' cables and hawsers. A Polar wind blows through it, and birds of prey hover over it.\"\nSo Melville wrote of his masterpiece, one of the greatest works of imagination in literary history. In part, Moby-Dick is the story of an eerily compelling madman pursuing an unholy war against a creature as vast and dangerous and unknowable as the sea itself. But more than just a novel of adventure, more than an encyclopaedia of whaling lore and legend, the book can be seen as part of its author\'s lifelong meditation on America. Written with wonderfully redemptive humour, Moby-Dick is also a profound inquiry into character, faith, and the nature of perception.\nThis edition of Moby-Dick, which reproduces the definitive text of the novel, includes invaluable explanatory notes, along with maps, illustrations, and a glossary of nautical terms.', 1, 5, 5),
(7, 'The Count of Monte Cristo', 6, 'Thrown in prison for a crime he has not committed, Edmond Dantes is confined to the grim fortress of If. There he learns of a great hoard of treasure hidden on the Isle of Monte Cristo and he becomes determined not only to escape, but also to unearth the treasure and use it to plot the destruction of the three men responsible for his incarceration. Dumas’ epic tale of suffering and retribution, inspired by a real-life case of wrongful imprisonment, was a huge popular success when it was first serialized in the 1840s.\nRobin Buss’s lively English translation is complete and unabridged, and remains faithful to the style of Dumas’s original. This edition includes an introduction, explanatory notes and suggestions for further reading. ', 1, 5, 6),
(8, 'The Picture of Dorian Gray', 7, 'Oscar Wilde brings his enormous gifts for astute social observation and sparkling prose to The Picture of Dorian Gray, his dreamlike story of a young man who sells his soul for eternal youth and beauty. This dandy, who remains forever unchanged; petulant, hedonistic, vain, and amoral; while a painting of him ages and grows increasingly hideous with the years, has been horrifying, enchanting, obsessing, even corrupting readers for more than a hundred years.Taking the reader in and out of London drawing rooms, to the heights of aestheticism, and to the depths of decadence, The Picture of Dorian Gray is not only a melodrama about moral corruption. Laced with bon mots and vivid depictions of upper-class refinement, it is also a fascinating look at the milieu of Wilde’s fin-de-siècle world and a manifesto of the creed Art for Art’s Sake.” ', 1, 5, 8);

-- --------------------------------------------------------

--
-- Table structure for table `book_price`
--

CREATE TABLE `book_price` (
  `id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `price_id` int(11) NOT NULL,
  `date_from` datetime NOT NULL DEFAULT current_timestamp(),
  `date_to` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book_price`
--

INSERT INTO `book_price` (`id`, `book_id`, `price_id`, `date_from`, `date_to`) VALUES
(1, 1, 1, '2023-04-01 13:47:14', '0000-00-00 00:00:00'),
(2, 2, 1, '2023-04-01 13:47:14', '0000-00-00 00:00:00'),
(3, 3, 1, '2023-04-01 13:48:16', '0000-00-00 00:00:00'),
(4, 4, 3, '2023-04-01 13:48:16', '0000-00-00 00:00:00'),
(5, 5, 5, '2023-04-01 13:49:29', '2024-04-17 13:49:09'),
(6, 6, 2, '2023-04-01 13:49:29', '2023-05-11 13:49:09'),
(7, 7, 3, '2023-04-01 13:51:32', '0000-00-00 00:00:00'),
(8, 8, 1, '2023-04-01 13:51:32', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

CREATE TABLE `discount` (
  `id` int(11) NOT NULL,
  `percent` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `discount`
--

INSERT INTO `discount` (`id`, `percent`, `name`) VALUES
(1, 12, 'christmas'),
(2, 20, 'mayday'),
(5, 0, 'none');

-- --------------------------------------------------------

--
-- Table structure for table `genre`
--

CREATE TABLE `genre` (
  `id` int(11) NOT NULL,
  `name` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `image`
--

CREATE TABLE `image` (
  `id` int(11) NOT NULL,
  `url` varchar(100) NOT NULL,
  `alt` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `image`
--

INSERT INTO `image` (`id`, `url`, `alt`) VALUES
(1, 'gatsbycover.jpg', 'Book cover'),
(2, 'thewaroftheworldscover.jpg', 'war of the worlds cover'),
(3, 'drakulacover.jpg', 'dracula cover'),
(4, 'theblackcatcover.jpg', 'the black cat cover'),
(5, 'wutheringheightscover.jpg', 'Wuthering heights cover'),
(6, 'mobydickcover.jpg', 'Moby dick cover'),
(7, 'montecristocover.jpg', 'Count of Monte Christo cover art'),
(8, '1857397.jpg', 'The picture of Dorian Gray cover art');

-- --------------------------------------------------------

--
-- Table structure for table `price`
--

CREATE TABLE `price` (
  `id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `price`
--

INSERT INTO `price` (`id`, `amount`) VALUES
(1, '9.99'),
(2, '5.99'),
(3, '8.99'),
(4, '4.99'),
(5, '3.99'),
(6, '7.99'),
(7, '11.00'),
(8, '123.00'),
(9, '14.00'),
(10, '12.00'),
(11, '44.00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`),
  ADD KEY `image_id` (`image_id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `discount_id` (`discount_id`);

--
-- Indexes for table `book_price`
--
ALTER TABLE `book_price`
  ADD PRIMARY KEY (`id`),
  ADD KEY `price_id` (`price_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `discount`
--
ALTER TABLE `discount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `image`
--
ALTER TABLE `image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `price`
--
ALTER TABLE `price`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `author`
--
ALTER TABLE `author`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `book_price`
--
ALTER TABLE `book_price`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT for table `discount`
--
ALTER TABLE `discount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `image`
--
ALTER TABLE `image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `price`
--
ALTER TABLE `price`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `book`
--
ALTER TABLE `book`
  ADD CONSTRAINT `book_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `image` (`id`),
  ADD CONSTRAINT `book_ibfk_2` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  ADD CONSTRAINT `book_ibfk_3` FOREIGN KEY (`discount_id`) REFERENCES `discount` (`id`);

--
-- Constraints for table `book_price`
--
ALTER TABLE `book_price`
  ADD CONSTRAINT `book_price_ibfk_1` FOREIGN KEY (`price_id`) REFERENCES `price` (`id`),
  ADD CONSTRAINT `book_price_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
