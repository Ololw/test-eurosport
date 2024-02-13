import { aliasQuery, hasOperationName } from '../utils/graphql-test-utils';

const DEV_GRAPHQL_URL = 'https://kf9p4bkih6.execute-api.eu-west-1.amazonaws.com/dev/';

describe('The Home Page', () => {
  beforeEach(() => {
    cy.intercept('POST', DEV_GRAPHQL_URL, (req) => {
      aliasQuery(req, 'GetPlayers');
      aliasQuery(req, 'GetMatches');
    });

    cy.intercept('POST', DEV_GRAPHQL_URL, (req) => {
      if (hasOperationName(req, 'GetPlayers')) {
        req.alias = 'glqGetPlayersQuery';
        req.reply({
          fixture: '../fixtures/mockPlayers.json',
        });
      } else if (hasOperationName(req, 'GetMatches')) {
        req.alias = 'glqGetPlayersQuery';
        req.reply({
          fixture: '../fixtures/mockMatches.json',
        });
      }
    });
  });

  it('Homepage successfully loads', () => {
    cy.visit('/');
    cy.get('[data-cy="player-cards"] > :nth-child(1)').contains('Fake 1 Player 1');
    cy.get('[data-cy="player-cards"] > :nth-child(2)').contains('Fake 2 Player 2');
  });

  it('Clicking on a player should show matches that he won', () => {
    cy.visit('/');
    cy.get('[data-cy="player-cards"] > :nth-child(1)').contains('Fake 1 Player 1').click();
    cy.contains('Matches won by Player 1');
    cy.get(':nth-child(1) > [data-cy="match-card--players"] > .text-green-win').contains('Player 1');
    cy.get(':nth-child(1) > [data-cy="match-card--players"] > .text-red-lose').contains('Player 2');
  });

  it('Clicking on another player should show matches that the other play won', () => {
    cy.visit('/');
    cy.contains('Fake 1 Player 1').click();
    cy.get('[data-cy="player-cards"] > :nth-child(2)').contains('Fake 2 Player 2').click();
    cy.contains('Matches won by Player 2');
    cy.get(':nth-child(1) > [data-cy="match-card--players"] > .text-green-win').contains('Player 2');
    cy.get(':nth-child(1) > [data-cy="match-card--players"] > .text-red-lose').contains('Player 1');
  });
});
