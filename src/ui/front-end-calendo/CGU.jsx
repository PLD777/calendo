import React from 'react';
import styled from 'styled-components';

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

  p {
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
    font-size: 1.1rem;
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

const CGUContent = styled.div`
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
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 400;
  }

  .subsection {
    margin-bottom: 1rem;
    padding-left: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.9);
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

    &::before {
      content: '•';
      position: absolute;
      left: -1rem;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const CGU = ({ onClose }) => {
  return (
    <Modal onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <CGUContent>
          <h2>Conditions Générales d'Utilisation</h2>
          <p className="date">Dernière mise à jour le 28/11/2023</p>

          <div className="section">
            <div className="section-title">1. Objet des conditions générales d'utilisation</div>
            <div className="subsection">
              <p>
                1.1 Les présentes Conditions Générales d'Utilisation (ci‑après les « CGU ») ont pour objet de définir les conditions suivant
                lesquelles les Utilisateurs accèdent au Site accessible à l'adresse https://calendo.pel.digital/ (ci‑après « le Site »).
              </p>
              <p>
                1.2 Tout Utilisateur du Site est réputé avoir pris connaissance des présentes CGU, qui s'appliquent dès lors que ce dernier accède au
                Site, et s'engage à les respecter sans réserve.
              </p>
              <p>
                1.3 Les CGU sont conclues pour une durée indéterminée. Elles sont susceptibles d'être modifiées ou complétées à tout moment, et les
                Utilisateurs du Site sont invités à les consulter de manière régulière.
              </p>
              <p>
                1.4 Dans le cadre de l'utilisation du Site, l'Utilisateur devra également prendre connaissance ou accepter le contenu des documents
                suivants : Règlement du Jeu
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">2. Définitions</div>
            <div className="subsection">
              <p>« Conditions Générales d'Utilisation » ou « CGU » désigne les conditions générales d'utilisation applicables au Service.</p>
              <p>
                « Service » désigne le service d'inscription et de participation aux jeux mis à disposition de l'Utilisateur par PEL DIGITAL via le
                Site calendo.pel.digital.
              </p>
              <p>« Site » désigne le site web accessible via l'Url https://calendo.pel.digital/</p>
              <p>« Client » désigne une société faisant appel au service de PEL DIGITAL pour promouvoir ses offres promotionnelles.</p>
              <p>« Utilisateur » désigne, indistinctement, tout internaute naviguant sur le Site, participant ou non.</p>
              <p>
                « Participant » désigne spécialement tout Utilisateur ayant participé au jeu, ou ayant saisi ses informations personnelles pour
                participer au jeu disponible sur le Site.
              </p>
              <p>
                « Donnée personnelle » désigne toute information relative à une personne physique identifiée ou qui peut être identifiée comme telle,
                soit directement soit indirectement par regroupement d'informations, par référence à un numéro d'identification ou à des éléments qui
                lui sont propres : nom, prénom, numéro de téléphone, adresse email, code postal, etc.
              </p>
              <p>
                « RGPD » désigne le Règlement UE 2016/679 du Parlement européen et du Conseil du 27 avril 2016 relatif à la protection des personnes
                physiques à l'égard du traitement des Données à caractère personnel et à la libre circulation de ces données.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">3. Description et utilisation du site</div>
            <div className="subsection">
              <p>
                3.1 PEL DIGITAL propose gratuitement pour le compte de ses clients, aux participants différents types de jeux concours. La description
                des modalités de participation et des lots à gagner est accessible au règlement du Jeu.
              </p>
              <p>
                3.2 En acceptant les Conditions Générales d'Utilisation (CGU) lors de la participation au jeu-concours, le participant adhère aux
                points mentionnés :
              </p>
              <p>« J'accepte de recevoir par email des offres promotionnelles de la part des clients de PEL DIGITAL »</p>
              <p>« J'accepte de recevoir par SMS des offres promotionnelles de la part des clients de PEL DIGITAL »</p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">4. Accès et utilisation du site</div>
            <div className="subsection">
              <p>Pour participer aux jeux accessibles sur le Site, l'Utilisateur doit au préalable renseigner une donnée personnelle.</p>
              <p>Le Participant pourra accéder au jeu disponible et y participer suivant les modalités décrites au sein du Règlement du Jeu.</p>
              <p>
                La participation au jeu est ouverte uniquement aux personnes physiques âgées de 18 ans et plus, hors collaborateurs du client, membres
                de leurs familles et partenaires du client.
              </p>
              <p>La participation au jeu est limitée à une par personne.</p>
              <p>La participation au jeu est limitée à la France Métropolitaine.</p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">5. Propriété intellectuelle</div>
            <div className="subsection">
              <p>
                5.1 Le Site, son contenu, les divertissements et jeux sans obligation d'achat proposés, tous les éléments qui le composent ainsi que
                tous les droits qui leurs sont rattachés sont la propriété exclusive de la société PEL DIGITAL.
              </p>
              <p>
                5.2 PEL DIGITAL concède à l'Utilisateur, pour la durée de son adhésion au Service, un droit d'utilisation personnel, non exclusif et
                non cessible au Site. Ce droit d'utilisation s'entend uniquement pour un usage strictement privé. Aucune disposition des CGU ne peut
                être interprétée comme une cession de droits de propriété intellectuelle que ce soit tacitement ou d'une autre façon.
              </p>
              <p>
                5.3 L'ensemble des éléments existant sur le Site, incluant notamment, les logos, les textes et les infographies, constituent des
                œuvres au sens des dispositions de l'article L 112‑1 du Code de la Propriété Intellectuelle. En conséquence, toute représentation,
                reproduction, diffusion ou altération, intégrale ou partielle, qui pourrait en être faite sans le consentement de leurs auteurs ou de
                leurs ayants droits, est illicite et constitue un acte de contrefaçon civilement et pénalement sanctionnable.
              </p>
              <p>
                5.4 A ce titre, l'Utilisateur s'interdit notamment, de manière non exhaustive, pour un usage autre que privé, de reproduire et/ou
                représenter, télécharger, vendre, distribuer, émettre, traduire, adapter, exploiter, distribuer, diffuser et communiquer intégralement
                ou partiellement sous quelque forme que ce soit, à titre commercial ou non, toute œuvre de l'esprit originale ou donnée contenue sur
                le Site.
              </p>
              <p>
                L'Utilisateur s'interdit également d'introduire des données sur le Site qui modifieraient ou qui seraient susceptibles de modifier le
                contenu ou l'apparence des données, de la présentation ou de l'organisation du Site ou des œuvres figurant sur le Site, et par quelque
                procédé que ce soit.
              </p>
              <p>
                5.5 Le contenu des publicités et annonces diffusées sur le Site est également protégé par le droit de la propriété intellectuelle. Ces
                éléments ne peuvent donc pas être utilisés, reproduits, modifiés, diffusés, ou empruntés pour créer des œuvres dérivées sans
                l'autorisation de leurs titulaires respectifs.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">6. Protection des données personnelles</div>
            <div className="subsection">
              <p>
                6.1 Le Site collecte les Données à caractère personnel des Utilisateurs dans le cadre de leur navigation et de leur utilisation du
                Site.
              </p>
              <p>
                6.2 Politique de confidentialité est accessible en bas de chaque page du Site afin d'informer les Utilisateurs du traitement de leurs
                données par PEL DIGITAL.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">7. Engagements et responsabilité de l'utilisateur</div>
            <div className="subsection">
              <p>7.1 Engagements du Participant relatifs à ses informations</p>
              <p>
                7.1.1 Le Participant s'engage à ce que toutes les informations fournies au Site (en ce compris ses Données personnelles) lors de son
                inscription au Service soient sincères, exactes complètes et à jour.
              </p>
              <p>
                Il s'engage notamment à ne pas créer une fausse identité de nature à induire le Site ou les tiers en erreur et à ne pas usurper
                l'identité d'une autre personne physique.
              </p>
              <p>
                7.2 Dans l'hypothèse où le Participant fournirait des informations fausses, inexactes, périmées, incomplètes, trompeuses ou de nature
                à induire en erreur, le Site pourra, immédiatement sans préavis ni indemnité, suspendre son utilisation et lui refuser l'accès, de
                façon temporaire ou définitive, à tout ou partie du Service.
              </p>
              <p>7.3 Engagement de l'Utilisateur relatifs à l'utilisation du site</p>
              <p>
                7.3.1 L'utilisation du Site et son utilisation implique une attitude loyale, dans le respect absolu des règles et des droits des
                autres Utilisateurs.
              </p>
              <p>
                7.3.2 L'Utilisateur reconnait disposer de la compétence et des moyens nécessaires pour accéder et consulter le Site, et reconnait
                avoir vérifié que le support utilisé pour consulter le Site est pourvu d'antivirus et est en parfait état de fonctionnement.
              </p>
              <p>
                Les équipements (notamment ordinateur, téléphone, logiciels, moyens de communication électronique) permettant l'accès et l'utilisation
                du Site sont à la charge exclusive de l'Utilisateur, de même que les frais de communications électroniques (notamment coûts
                téléphoniques, coûts d'accès à internet) résultant de leur utilisation.
              </p>
              <p>
                7.3.3 En cas de manquement imputable à l'Utilisateur, ce dernier s'engage à garantir et indemniser la société PEL DIGITAL contre tout
                dommage, plainte ou demande émanant de tiers. Il s'engage notamment à prendre en charge : tous les dommages et intérêts auxquels PEL
                DIGITAL serait condamnée, et ce, dès que la condamnation les prononçant devient exécutoire, les indemnisations et frais de toute
                nature dépensés par PEL DIGITAL pour assurer sa défense, y compris les frais d'avocat et toutes sanctions qui pourraient être
                prononcées par une autorité administrative, telle que la Commission Nationale de l'Informatique et des Libertés.
              </p>
              <p>
                7.3.4 L'Utilisateur s'engage à s'inscrire et à utiliser le Service conformément aux conditions définies dans les CGU, dans le
                Règlement du jeu et dans le respect de la réglementation française en vigueur applicable à la date de conclusion des CGU, et ce
                pendant toute leur durée d'exécution.
              </p>
              <p>
                Dans l'hypothèse où le Participant aurait effectué une participation frauduleuse au Site ou une utilisation non conforme de celui‑ci,
                PEL DIGITAL se réserve la possibilité de suspendre son Compte Personnel et de lui refuser l'accès, de façon temporaire ou définitive,
                à tout ou partie du Service dans les modalités prévues à l'article 10 des présentes CGU et de prendre toutes les mesures adéquates
                pour rétablir l'égalité entre les joueurs en cas de gain non légitime.
              </p>
              <p>
                Dans l'hypothèse où l'Utilisateur aurait effectué une inscription frauduleuse au Site ou une utilisation non conforme de celui‑ci, PEL
                DIGITAL peut prétendre à des dommages et intérêts de nature à réparer le manquement en cause.
              </p>
              <p>
                7.3.5 Toute atteinte au système de traitement automatisé de données du Site fera l'objet de poursuites pénales, conformément aux
                dispositions des articles 323‑1 à 323‑7 du Code Pénal. Tout faux et usage de faux fera l'objet de poursuites pénales, conformément aux
                dispositions des articles 441‑1 à 441‑12 du Code Pénal.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">8. Engagements et responsabilité du site</div>
            <div className="subsection">
              <p>8.1 Engagements de PEL DIGITAL</p>
              <p>
                8.1.1 PEL DIGITAL met en place les moyens et les mesures nécessaires à la bonne marche, au maintien de la continuité et de la qualité
                du Service. Elle se réserve la faculté de modifier les caractéristiques ou le contenu du Site.
              </p>
              <p>
                8.1.2 PEL DIGITAL prend toute précaution utile afin de préserver la sécurité et la confidentialité des données afin notamment
                d'empêcher qu'elles soient déformées, endommagées, divulguées, et que des tiers non autorisés y aient accès, ainsi que de garantir le
                respect des CGU.
              </p>
              <p>
                8.1.3 L'Utilisateur reconnaît néanmoins que son utilisation du Site se fait à ses risques et périls. Le Site est fourni « en l'état »
                et est accessible sans aucune garantie de disponibilité et de régularité. PEL DIGITAL s'efforcera cependant de se rendre accessible 24
                heures sur 24, 7 jours sur 7, sauf en cas de force majeure telle que définie par la jurisprudence des tribunaux français ou d'un
                événement hors de son contrôle et sous réserve des périodes de maintenance planifiées, des pannes éventuelles, des aléas techniques
                liés à la nature du réseau Internet, du serveur sur lequel le Site est hébergé, ou des actes de malveillance ou toute atteinte portée
                à son matériel ou à ses logiciels.
              </p>
              <p>8.2 Limitation de responsabilité</p>
              <p>
                8.2.1 PEL DIGITAL ne pourra pas être tenue pour responsable des interruptions et suspensions de l'accès au Site, des erreurs, de la
                présence de virus ou autres infections informatiques, de l'intrusion frauduleuse d'un tiers ayant entraîné une modification des
                informations mises à la disposition sur le Site ainsi que de leurs conséquences pour l'Utilisateur.
              </p>
              <p>
                PEL DIGITAL ne pourra également pas être tenue responsable si les données relatives à un Participant ne lui parvenaient pas ou lui
                parvenaient de manière incomplètes ou impossibles à traiter, et ce pour quelque raison que ce soit.
              </p>
              <p>
                PEL DIGITAL ne pourra également pas être tenue responsable de l'installation et du fonctionnement des terminaux utilisés par
                l'Utilisateur.
              </p>
              <p>
                8.2.2 PEL DIGITAL ne garantit pas le résultat des jeux concours mis à disposition des Utilisateurs. En conséquence, sa responsabilité
                ne saurait être engagée en cas de perte et d'absence de gain de l'Utilisateur.
              </p>
              <p>
                PEL DIGITAL ne pourra également être tenue responsable des dommages indirects (tels que par exemple la perte de chance d'obtenir un
                gain) consécutifs à l'utilisation du Site.
              </p>
              <p>
                8.2.3 Le Site ne peut pas être tenu pour responsable de tous dommages provoqués par des tiers, par l'Utilisateur ou par toute personne
                agissant pour son compte.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">9. Sites tiers</div>
            <div className="subsection">
              <p>
                9.1 Pour le cas où le Site contiendrait des liens hypertextes renvoyant vers des sites internet édités par des tiers (ci‑après les «
                Sites Tiers ») sur lesquels PEL DIGITAL n'exerce aucune sorte de contrôle, l'Utilisateur reconnaît que les contenus accessibles par le
                biais de ces Sites Tiers n'engagent pas la responsabilité de PEL DIGITAL.
              </p>
              <p>
                9.2 PEL DIGITAL ne pourra être tenue pour responsable des contenus, notamment les documents ou données disponibles sur les sites objet
                des liens, ni des conséquences qui pourraient découler de la consultation ou de l'utilisation de ces sites.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">10. Modification des conditions générales</div>
            <div className="subsection">
              <p>
                PEL DIGITAL peut modifier, à tout moment, les présentes CGU, afin notamment de prendre en compte toute évolution légale,
                réglementaire, jurisprudentielle et/ou technique.
              </p>
              <p>
                PEL DIGITAL informera l'Utilisateur de la modification des CGU par tout moyen de son choix, moyennant un préavis d'un (1) mois avant
                l'entrée en vigueur des nouvelles CGU. En cas de désaccord du Participant sur cette nouvelle version des CGU, il pourra résilier son
                adhésion au Service dans les conditions définies à l'article 10.1. et s'engage en conséquence à cesser d'utiliser le Service.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">11. Renonciation</div>
            <div className="subsection">
              <p>
                Le fait pour l'une ou l'autre des Parties de ne pas se prévaloir d'une ou plusieurs stipulations des CGU ne pourra en aucun cas
                impliquer la renonciation par cette Partie à s'en prévaloir ultérieurement.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">12. Nullité partielle</div>
            <div className="subsection">
              <p>
                Dans le cas où certaines stipulations des CGU seraient inapplicables pour quelque raison que ce soit, y compris en raison d'une loi ou
                d'une réglementation applicable, les Parties resteront liées par les autres stipulations des CGU et s'efforceront de remédier aux
                clauses inapplicables dans le même esprit que celui qui a présidé lors de la conclusion.
              </p>
            </div>
          </div>

          <div className="section">
            <div className="section-title">13. Droit applicable et attribution des compétences</div>
            <div className="subsection">
              <p>
                13.1 Les présentes CGU sont soumises à la loi française. Il en est ainsi pour les règles de fond et les règles de forme et ce,
                nonobstant les lieux d'exécution des obligations substantielles ou accessoires.
              </p>
              <p>13.2 Tout litige relatif aux CGU relève de la compétence des juridictions françaises.</p>
              <p>
                13.3 Avant toute action contentieuse, les Parties s'engagent à chercher, de bonne foi, à régler à l'amiable leurs différends relatifs
                à la validité, l'interprétation, l'exécution ou l'inexécution, l'interruption, la résiliation ou la dénonciation des présentes CGU et
                ce, pour quelques causes et sur quelques fondements que ce soient. Les Parties devront se réunir afin de confronter leurs points de
                vue et effectuer toutes constatations utiles afin de trouver une solution au conflit qui les oppose.
              </p>
              <p>
                Les Parties s'efforceront ainsi de trouver un accord amiable dans un délai d'un (1) mois à compter de la notification par l'une d'elle
                par lettre recommandée avec accusé de réception.
              </p>
              <p>
                A défaut d'accord amiable pour solder le litige dans le délai d'un (1) mois, la Partie qui le souhaite pourra saisir le tribunal
                compétent en application des règles de droit commun.
              </p>
            </div>
          </div>
        </CGUContent>
      </ModalContent>
    </Modal>
  );
};

export default CGU;
