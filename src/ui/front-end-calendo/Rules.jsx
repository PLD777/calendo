import React from 'react';
import styled from 'styled-components';
import { useOperationByLink } from '../../features/calendo/useOperationByLink';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(50px);
`;

const ModalContent = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 25px;
  max-width: 1600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  color: white;
  transition: all 0.3s ease;

  &:hover {
    border-color: white;
    box-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
  }

  h2 {
    color: white;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  }
`;

const RulesContent = styled.div`
  h2 {
    margin-bottom: 1rem;
    color: white;
    font-weight: 400;
  }

  .date {
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    margin-bottom: 2rem;
  }

  .section {
    margin-bottom: 2rem;
  }

  .section-title {
    color: white;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  .subsection {
    margin-bottom: 1rem;
    padding-left: 1rem;
  }

  p {
    margin-bottom: 0.8rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
  }

  ul {
    list-style: none;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;
    color: rgba(255, 255, 255, 0.9);
    padding-left: 1rem;

    &::before {
      content: '•';
      position: absolute;
      left: -1rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const Rules = ({ onClose }) => {
  const { store } = useOperationByLink();
  const operation = store?.operations[0];
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <RulesContent>
          <h2>Règlement - Jeu Calendrier de l'Avent</h2>
          <p className="date">Dernière mise à jour le 01/12/2024</p>

          <div className="section">
            <div className="section-title">Article 1 : Organisation</div>
            <div className="subsection">
              <p>
                La société {store?.companyName} ci-après dénommée « la Société Organisatrice », immatriculée au RCS {store?.siret}, ayant son siège
                social à {store?.city}, organise du 01/12/24 au 24/12/24 à 12h un jeu concours sans obligation d'achat intitulé « Jeu Calendrier de
                l'Avent » (ci-après dénommé « le Jeu »).
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Article 2 : Participation</div>
            <div className="subsection">
              <p>
                La participation au Jeu est réservée aux personnes physiques majeures selon la loi française à la date du lancement du Jeu (soit âgées
                de 18 ans et plus), résidant en France Métropolitaine (Corse incluse), à l'exception du personnel salarié de la Société Organisatrice,
                de tous prestataires ayant collaboré à l'organisation du Jeu.
              </p>
              <p>
                Les personnes n'ayant pas justifié de leurs coordonnées et identités complètes ou qui les auront fournies de façon inexacte ou
                mensongère seront disqualifiées, tout comme les personnes refusant les collectes, enregistrements et utilisations des informations à
                caractère nominatif les concernant et nécessaires pour les besoins de la gestion du Jeu.
              </p>
              <p>
                La participation au Jeu entraîne l'acceptation pure et simple du présent règlement, en toutes ses dispositions, des règles de
                déontologie en vigueur, ainsi que des lois et règlements applicables aux jeux en vigueur sur le territoire français.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Article 3 : Principe et modalités d'inscription</div>
            <div className="subsection">
              <p>Pour participer au Jeu, le participant doit :</p>
              <p>- S'inscrire sur la page du jeu</p>
              <p>- Compléter son profil (nom, prénom, n° de tel, mail, code postal)</p>
              <p>- Accepter les CGU</p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Article 4 : Dotation</div>
            <div className="subsection">
              <p>La dotation est la suivante : " {operation?.loot}" à gagner</p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Article 5 : Désignation du gagnant et modalités d'attribution des dotations</div>
            <div className="subsection">
              <p>
                Le gagnant sera désigné par tirage au sort après vérification de leur éligibilité au gain de la dotation les concernant et prévenus
                par mail afin de confirmer ses coordonnées. Sans réponse de sa part durant un délai de 14 jours après l'envoi de celui-ci, la dotation
                restera la propriété de la société organisatrice.
              </p>
              <p>
                Du seul fait de l'acceptation de ce règlement, le gagnant autorise la Société Organisatrice à utiliser son nom et prénom dans toute
                manifestation publi-promotionnelle, sur le site Internet de la Société Organisatrice et sur tout site ou support affilié, sans que
                cette utilisation puisse ouvrir de droit et rémunération autres que le prix gagné.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Article 6 : Acheminement des lots</div>
            <div className="subsection">
              <p>Le lot sera à retirer à l'accueil du magasin sous un délai de 14 Jours après la clôture du Jeu.</p>
              <p>
                Si le lot n'a pu être remis à son destinataire pour quelque raison que ce soit, indépendamment de la volonté de la Société
                Organisatrice, il restera définitivement la propriété de la Société Organisatrice.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Article 7 : Publicité</div>
            <div className="subsection">
              <p>
                En participant au Jeu, le gagnant autorise la Société Organisatrice à communiquer son nom, à réaliser une photo de la remise du lot
                pour une diffusion éventuelle sur différents médias, sans que cela ne lui confère un droit à une rémunération, ou à un avantage
                quelconque autre que l'attribution de son lot.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Article 8 : Données personnelles</div>
            <div className="subsection">
              <p>
                Il est rappelé que pour participer au Jeu, les joueurs doivent nécessairement fournir certaines informations personnelles les
                concernant (nom, prénom, email, téléphone, etc.). Ces informations sont enregistrées et sauvegardées dans un fichier informatique et
                sont nécessaires à la prise en compte de leur participation, à la détermination des gagnants, à l'attribution et à la remise du lot.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">Article 9 : Responsabilité</div>
            <div className="subsection">
              <p>
                La Société Organisatrice ne saurait être tenue pour responsable des retards, pertes, vols, avaries des courriers, manque de lisibilité
                des cachets du fait des services postaux. Elle ne saurait non plus être tenue pour responsable et aucun recours ne pourra être engagé
                contre elle en cas de survenance d'événements présentant les caractères de force majeure privant partiellement ou totalement les
                participants de la possibilité de participer au jeu et/ou les gagnants du bénéfice de leurs gains.
              </p>
            </div>
          </div>
        </RulesContent>
      </ModalContent>
    </Modal>
  );
};

export default Rules;
