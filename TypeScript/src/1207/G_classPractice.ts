// 은행 계좌 관리 시스템

// Account 클래스 생성
class Account {
  // 속성:  accountNumber(문자열, public, 계좌 번호)와 balance(숫자, private, 잔액)
  private balance: number;
  
  // 생성자를 사용하여 계좌 번호를 초기화, 초기 잔액은 0으로 설정
  constructor(public accountNumber: string) {
    // private으로 설정되어 있기 때문에 클래스 내부에서만 접근 가능
    // 초기 잔액을 0으로 설정
    this.balance = 0;
  }

  // deposit(amount: number) 메서드를 추가하여 입금 기능을 구현
  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Deposit: ${amount}, New Balance: ${this.balance}`);
  }
  
  // withdraw(amount: number) 메서드를 추가하여 출금 기능을 구현
  // : 잔액이 부족할 경우 오류 메시지를 출력
  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}, New Balance: ${this.balance}`);
    } else {
      console.log('Not enough balance');
    }
  }

  // getBalance() 메서드를 추가하여 현재 잔액을 출력
  getBalance(): void {
    console.log(`Current Balance: ${this.balance}`);
  }
}

const account = new Account('1234567890');
account.deposit(1000);
account.withdraw(500);
account.getBalance(); // 500

account.withdraw(200);
account.getBalance(); // 300

account.withdraw(400); // Not enough balance
account.getBalance(); // 300