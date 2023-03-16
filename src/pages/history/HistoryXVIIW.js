import React from "react";
import "./AllHistory.scss";

const HistoryXVIIW = () => {

    const showMore = () => {
        var more = document.querySelector(".more");
        if (more.style.display === "none") {
            more.style.display = "block";
            document.getElementById("more").innerHTML = "Mniej";
        } else {
            more.style.display = "none";
            document.getElementById("more").innerHTML = "Więcej";
        }
    };

    const goBack = () => {
        window.history.back();
    };

    const goPotop = () => {
        document.getElementById("potop").scrollIntoView();
    };

    const goPanowanie = () => {
        document.getElementById("panowanie").scrollIntoView();
    };

    const goBarok = () => {
        document.getElementById("barok").scrollIntoView();
    };

    const toTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <div className="menu">
                <button onClick={goBack}>Powrót</button>
                <button onClick={goPotop}>Potop Szwedzki</button>
                <button onClick={goPanowanie}>Panowanie Jana III Sobieskiego</button>
                <button onClick={goBarok}>Barok i sarmatyzm</button>
            </div>
            <button className="toTop" onClick={toTop}>Na górę</button>
            <h1 id="potop">Potop szwedzki i kryzys Rzeczypospolitej</h1>
            <h2>Przyczyny:</h2>
            <li>Król Szwecji (Karol X Gustaw) atakuje Polskę</li>
            <li>Król Polski (Jan II Kazimierz Waza)</li>
            <p>Potop rozpoczął się w lipcu 1655</p>
            <p>Potop kończy się w 1660</p>
            <img src="http://wlaczpolske.pl/pliczki/2095" alt="Potop" width={700} />
            <p>1655 - układ w Kiejdanach</p>
            <p>1655 - kapitulacja pod Ujściem</p>
            <p>1655 listopad-grudzień - obrona Jasnej Góry</p>
            <p>Walka partyzancka</p>
            <li>Stefan Czerniecki na czele wojsk polskich w bitwie pod Warką</li>
            <p>1 kwietnia - Śluby Lwowskie Jana Kazimierza - 1656</p>
            <p>1656 - bitwa pod Warką</p>
            <p>1656 - układ w Radnot - podział Polski</p>
            <p>1657 - traktat welawsko-bydgoski</p>
            <p>1660 - pokój ze szwedami (w Oliwie)</p>
            <h2>Jan II Kazimierz Waza</h2>
            <p>Liberum Veto</p>
            <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/158033791_3523059084586104_4526347952801653754_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=coD5OiMjpooAX_BTn13&_nc_ht=scontent-waw1-1.xx&oh=00_AfAhr4QkDL2IE_jyHM1aCmXD6UH95qySTkM66lhkbWQu5g&oe=643A8D54" alt="Liberum Veto" width={700} />
            <p>1658 - wyganie arian z Polski</p>
            <p>1666 - bitwa pod Mątwami</p>
            <p>1668 - abdykacja Jana II Kaziemierza Wazy (po śmierci żony)</p>
            <button onClick={showMore} id="more">Mniej</button>
            <div className="more">
                <h1>Potop szwedzki</h1>
                <p>Potop szwedzki to jedno z największych wydarzeń w historii Polski, które miało miejsce w XVII wieku.</p>
                <h2>Przyczyny Potopu szwedzkiego</h2>
                <ul>
                <li>Kryzys gospodarczy w Polsce</li>
                <li>Konflikty religijne</li>
                <li>Nieudane próby reform w Rzeczypospolitej</li>
                <li>Walka o wpływy polityczne w Europie</li>
                </ul>
                <h2>Przebieg Potopu szwedzkiego</h2>
                <p>Potop szwedzki trwał w latach 1655-1660 i był okresem ciężkich walk i zniszczeń. Wojska szwedzkie pod wodzą Karola X Gustawa najechały Polskę i zaczęły zdobywać miasta oraz zamki. Z czasem do walk włączyły się także wojska rosyjskie.</p>
                <h2>Skutki Potopu szwedzkiego</h2>
                <ul>
                <li>Ogromne straty materialne i ludzkie</li>
                <li>Upadek Rzeczypospolitej Obojga Narodów</li>
                <li>Zmiana układu sił w Europie</li>
                <li>Rozwój kultury i sztuki</li>
                </ul>
                <h2>Ciekawostki</h2>
                <p>W czasie Potopu szwedzkiego powstał znany utwór literacki "Potop" autorstwa Henryka Sienkiewicza.</p>
            </div>
            <h1 id="panowanie">Panowanie Jana III Sobieskiego</h1>
            <p>Michał Korybut Wiśniowiecki - 1669-1673</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Truce_of_Andrusovo_1667.PNG" alt="Truce of Andrusovo" width={700} />
            <p>1667 - pitwa pod Pobhajcami</p>
            <p>Oblężenie Kamieńca Podolskiego - 1672</p>
            <p>1672 - pokój w Buczaczu</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Polish%E2%80%93Lithuanian_Commonwealth_as_a_fief_of_the_Ottoman_Empire_1672-1676.PNG" alt="Polish–Lithuanian Commonwealth as a fief of the Ottoman Empire" width={700} />
            <p>1673 - bitwa pod Chocimiem</p>
            <p>1675 - oblężenie Trembowli</p>
            <p>1676 - pokój w Żurawie</p>
            <p>12 września 1683 - odsiecz wiedeńska</p>
            <p>1683 - Bitwy pod Parkanami</p>
            <p>1686 - Pokój Grzymułtowskiego (w Moskwie)</p>
            <p>1699 - pokój w Karłowicach</p>
            <h1 id="barok">Barok i sarmatyzm</h1>
            <p>Barok - główny kierunek w kulturze europejskiej, którego trwanie datuje się od końca XVI wieku do XVIII wieku. Nieoficjalny styl Kościoła katolickiego czasów potrydenckich, stąd pojawiające się jeszcze w połowie XX wieku zmienne określenia: “sztuka jezuicka” czy “sztuka kontrreformacyjna”</p>
            <p>Cechy baroku:</p>
            <ul>
                <li>odrzucenie renesansowego ładu i harmonii</li>
                <li>położenie nacisku na ruch. kontrast i dynamikę</li>
                <li>wykorzystanie sztuki i architektury do umacniania wiary katolickiej i nawracania innowierców przepych i bogactwo form</li>
            </ul>
            <p>Polski Wersal - Pałac Branicki w Białymstoku</p>
            <p>Kolegium jezuickie w Poznaniu</p>
        </div>
    )
};

export default HistoryXVIIW;