/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type register_page = typeof import('./pages/register_page.js');
type my_account_page = typeof import('./pages/my_account_page.js');
type customer_account_details_page = typeof import('./pages/customer_account_details.js');
type account_edit_page = typeof import('./pages/account_edit_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, register_page: register_page, my_account_page: my_account_page, customer_account_details_page: customer_account_details_page, account_edit_page: account_edit_page }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
