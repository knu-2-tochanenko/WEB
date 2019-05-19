document.write(`
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"/>

		<link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
		<link href="https://fonts.googleapis.com/css?family=PT+Sans" rel="stylesheet">
		<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
		<link rel="stylesheet" href="http://tools.tochanenko.com/googlesans.css">
		<link rel="stylesheet" href="style.css">
	</head>

	<div id="fade"></div>
	<form id="feedback-form">
		<h1>Обратная связь</h1>
		<label for="name-f">Ваше имя</label>
		<input placeholder="ФИО (больше 4 символов)" type="text" id="name-f" minlength="4">
		<label for="phone-f">Телефон</label>
		<input placeholder="095-777-7777" type="tel" id="phone-f" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
		<label for="email-f">Email</label>
		<input placeholder="name@gmail.com" type="email" id="email-f">
		<label for="message-f">Сообщение</label>
		<textarea id="message-f"></textarea>
		<div class="button" id="submit-button">Отправить</div>
	</form>

	<ul id="slide-left-menu">
		<li>Ноутбуки</li>
		<li>Смартфоны</li>
		<ul>
			<li>Pixel</li>
			<li>iPhone</li>
			<li>Samsung</li>
		</ul>
		<li>Планшеты</li>
		<li>Умные часы</li>
		<li>Чехлы и пленки</li>
	</ul>
	<ul id="slide-top-menu">
		<a href="index.html">
		    <li>
                <i class="material-icons">home</i>
                Главная
            </li>
		</a>
		<a href="catalog.html">
            <li>
                <i class="material-icons">view_module</i>
                Каталог
            </li>
		</a>
		<a href="payment.html">
            <li>
                <i class="material-icons">credit_card</i>
                Доставка и оплата
            </li>
		</a>
		<a href="pricelist.html">
            <li>
                <i class="material-icons">account_balance_wallet</i>
                Прайс-лист
            </li>
		</a>
		<a href="contacts.html">
            <li>
                <i class="material-icons">person</i>
                Контакты
            </li>
		</a>
		<li id="mobile-feedback">
			Оставить отзыв
		</li>
	</ul>

	<div id="menu-fade"></div>
	<div id="left-fade"></div>

	<body>
		<header>
			<div class="content">
				<div class="logo-block">
					<img src="images/sahara.png" alt="logo">
					<div class="logo-text">
						<h1 class="logo">Sahara<sap>&trade;</sap></h1>
						<h3 class="sublogo">A great place to shop</h3>
					</div>
				</div>
				<div class="phone-block">
					<p>+38 (093) 131-31-31</p>
					<p>+38 (091) 131-31-31</p>
					<p class="feedback" id="feedback-button">Обратная связь</p>
				</div>
			</div>
		</header>
		<div class="menu">
			<div class="content">
				<ul>
					<a href="index.html">
                        <li>
                            <i class="material-icons">home</i>
                                Главная
                        </li>
                    </a>
                    <a href="catalog.html">
                        <li>
                            <i class="material-icons">view_module</i>
                            Каталог
                        </li>
                    </a>
                    <a href="payment.html">
                        <li>
                            <i class="material-icons">credit_card</i>
                            Доставка и оплата
                        </li>
                    </a>
                    <a href="pricelist.html">
                        <li>
                            <i class="material-icons">account_balance_wallet</i>
                            Прайс-лист
                        </li>
                    </a>
                    <a href="contacts.html">
                        <li>
                            <i class="material-icons">person</i>
                            Контакты
                        </li>
                    </a>
				</ul>
			</div>
		</div>

		<div class="mobile-nav">
			<div id="side-opener"><i class="material-icons">chrome_reader_mode</i></div>
			<div id="menu-opener">Меню</div>
		</div>

		<div class="slider">
			<div class="content">
				<button id="prev-slide"></button>
				<div id="img1" class="hidden-img"></div>
				<div id="img2" class="hidden-img"></div>
				<div id="img3" class="hidden-img"></div>
				<div id="img4" class="hidden-img"></div>
				<div id="img5" class="hidden-img"></div>
				<button id="next-slide"></button>
			</div>
		</div>
`);