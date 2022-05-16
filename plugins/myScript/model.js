/**
 * 스크립트를 추가/삭제하는 클래스
 * @class MyScript
 */

export default class MyScript {
  /**
   * 스크립트 추가
   * @param id {String} Id
   * @param src {String} Path
   */
  set(id, src) {
    const idCheck = document.querySelector(`#${id}`);
    if (idCheck)
      return console.log(
        '중복된 아이디가 있거나 이미 스크립트가 삽입되어 있습니다.',
      );
    const script = document.createElement('script');
    script.src = src;
    script.id = id;
    document.head.appendChild(script);
  }

  /**
   * 스크립트 삭제
   * @param id {String} Id
   */
  remove(id) {
    const script = document.head.querySelector(`#${id}`);
    script.remove();
  }
}
